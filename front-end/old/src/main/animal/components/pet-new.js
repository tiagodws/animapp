import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPet, loadDogBreeds, loadCatBreeds} from '../actions/pet-actions';
import  {Pet}  from '../classes/pet-class';
import Modal from '../../app/components/modal';
import Album from '../../app/components/album';

class PetNew extends Component {

    constructor (props) {
        super(props);

        this.state = {showModal: false};
    }

    switchModal () {
        this.setState({showModal: !this.state.showModal});
    }

    componentDidMount(){
        $('select.dropdown').dropdown();

        if(this.props.dogBreeds.length == 0) this.props.loadDogBreeds();
        if(this.props.catBreeds.length == 0) this.props.loadCatBreeds();


    }

    onSubmit(props){
        const pet = new Pet();
        pet.setName(props.name);
        pet.setSpecie(props.specie);
        pet.setBreed(props.breed);
        pet.setSex(props.sex);
        pet.setMonths(props.months);
        pet.setWeight(props.weight);
        pet.setCastrated(props.castrated);
        pet.setDewormed(props.dewormed);
        pet.setDescription(props.description);
        pet.setPictures(props.pictures);
        this.props.createPet(pet);
    }

    render () {
        const species = [{code: '', label: '---'},
            {code: '1', label: 'Dog'},
            {code:'2', label: 'Cat'}];
        const sexs = [{code:'',label:'---'},
            {code:'1',label:'Female'},
            {code:'2',label:'Male'}];
        const { fields: {name, specie, breed, sex, months, weight, castrated, dewormed, description, pictures}, handleSubmit, load } = this.props;
        return (
            <div>

                <h2 className='ui center aligned icon header'>
                    <i className='circular add icon'></i>
                    {this.props.texts['HELP_PET_TEXT']}
                </h2>

                <form className='ui form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h4 className='ui dividing header'>{this.props.texts['PET_INFO']}</h4>
                    <div className='ui stackable column grid'>
                        <div className='sixteen wide column'>
                            <div className='field'>
                                <label>{this.props.texts['PET_NAME']}</label>
                                <input type='text' name='pet-name' placeholder={this.props.texts['PET_NAME']} {...name}/>
                            </div>
                        </div>
                    </div>
                    <div className="ui stackable three column grid">
                        <div className='six wide column'>
                            <div className='field'>
                                <label>{this.props.texts['PET_SPECIE']}</label>
                                <select {...specie}>
                                    {species.map((specie) =>(<option value={specie.code}>{specie.label}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className='six wide column'>
                            <div className='field'>
                                <label>{this.props.texts['PET_BREED']}</label>
                                <select {...breed}>
                                    {this.renderBreeds.call(this)}
                                </select>
                            </div>
                        </div>
                        <div className='four wide column'>
                            <div className='field'>
                                <label>{this.props.texts['PET_SEX']}</label>
                                <select {...sex}>
                                    {sexs.map((sex) => {
                                        return <option value={sex.code}>{sex.label}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='ui stackable three column grid'>
                        <div className='six wide column'>
                            <div className='field'>
                                <label>{this.props.texts['PET_AGE']}</label>
                                <input type='number' name='pet-months' placeholder={this.props.texts['PET_AGE_INFO']} {...months}/>
                            </div>
                        </div>
                        <div className='six wide column'>
                            <div className='field'>
                                <label>{this.props.texts['PET_WEIGHT']}</label>
                                <input type='number' name='pet-weight' placeholder={this.props.texts['PET_WEIGHT_INFO']} {...weight}/>
                            </div>
                        </div>

                        <div className="four wide column">
                            <div className="ui stackable two column grid">
                                <div className="eight wide column">
                                    <div className="field">
                                        <label>{this.props.texts['PET_CASTRATED']}</label>
                                        <input type="checkbox" {...castrated} />
                                    </div>
                                </div>
                                <div className="eight wide column">
                                    <div className="field">
                                        <label>{this.props.texts['PET_DEWORMED']}</label>
                                        <input type="checkbox" {...dewormed} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='ui stackable one column grid'>
                        <div className='sixteen wide column'>
                            <div className='field'>
                                <label>{this.props.texts['PET_DESCRIPTION']}</label>
                                <textarea rows="3" type='text' name='pet-description' {...description}/>
                            </div>
                        </div>
                    </div>

                    <h4 className='ui dividing header'>Pictures</h4>
                    <div className='ui stackable one column grid'>
                        <div className='sixteen wide column'>
                            <div className='field'>
                                <div>
                                    <label className='ui icon button'>
                                        <i className='picture icon'></i>
                                        {this.props.texts['UPLOAD_PICTURE']}</label>
                                    <input type='file' id='file' style={{display:'none'}} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.state.showModal ? <Modal closeModal={this.switchModal.bind(this)}><Album /></Modal> : ''}


                    <h4 className='ui dividing header'></h4>
                    <div className='ui stackable one column grid'>
                        <div className='sixteen wide column'>
                            <button type='submit' className='ui button'>{this.props.texts['SUBMIT']}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    renderBreeds(){
        debugger;
        if(this.props.fields.specie.value == '1'){
            return this.props.dogBreeds.map((breed) => (<option value={breed.code}>{breed.description}</option>))
        }else if(this.props.fields.specie.value == '2'){
            return this.props.catBreeds.map((breed) => (<option value={breed.code}>{breed.description}</option>))
        }

    }
}


function mapStateToProps(state){
    return{
        texts: state.languageResources.texts || {},
        catBreeds: state.pets.catBreeds || [],
        dogBreeds: state.pets.dogBreeds || []
    }
}

export default reduxForm({
    form: 'PetNewForm',
    fields: ['name', 'specie', 'breed', 'sex', 'months', 'weight', 'castrated', 'dewormed', 'description', 'pictures']
}, mapStateToProps, { createPet, loadDogBreeds, loadCatBreeds})(PetNew);
