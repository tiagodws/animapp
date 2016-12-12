import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPet } from '../actions/pet-actions';
import { Pet } from '../classes/pet-class';
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
        $('select.dropdown')
            .dropdown()
        ;
    }

    onSubmit(props){
        let createdPet = new Pet();
        createdPet.setName(props.petName);
        createdPet.setRace(props.petRace);
        createdPet.setWeight(props.petWeight);
        createdPet.setMonth(props.petAge);
        createdPet.setSex(props.petSex);
        createdPet.setDescription(props.petDescription);
        createdPet.setOwner(props.petOwner)
        this.props.createPet(createdPet);
    }

    render () {
        const races = [{code:'',label:'---'},
            {code:'1',label:'Poodle'},
            {code:'2',label:'Pitbull'}];
        const sexs = [{code:'',label:'---'},
            {code:'1',label:'Female'},
            {code:'2',label:'Male'}];
        const { fields: {petName, petRace, petWeight, petAge, petSex, petDescription}, handleSubmit } = this.props;
        return (
            <div>

                <h2 className="ui center aligned icon header">
                    <i className="circular add icon"></i>
                    {this.props.texts['HELP_PET_TEXT']}
                </h2>

                <div className="ui grid">

                    <div className="four wide column">
                        <div className="ui header">
                            <i className="info icon"></i>
                            <div className="content">
                                {this.props.texts['NEW_PET_INFO_CONTENT_1']}
                                <div className="sub header"> {this.props.texts['NEW_PET_INFO_CONTENT_2']}</div>
                            </div>
                        </div>
                        <div className="ui header">
                            <i className="heart icon"></i>
                            <div className="content">
                                {this.props.texts['NEW_PET_CARE_CONTENT_1']}
                                <div className="sub header"> {this.props.texts['NEW_PET_CARE_CONTENT_2']}</div>
                            </div>
                        </div>
                    </div>

                    <div className="eleven wide column">
                        <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <h4 className="ui dividing header">Pet Info</h4>

                            <div className="fields">
                                <div className="twelve wide field">
                                    <label>{this.props.texts['PET_NAME']}</label>
                                    <input type="text" name="pet-name" placeholder={this.props.texts['PET_NAME']} {...petName}/>
                                </div>

                                <div className="four wide field">
                                    <label>{this.props.texts['PET_AGE']}</label>
                                    <input type="number" name="pet-months" placeholder={this.props.texts['PET_AGE_INFO']} {...petAge}/>
                                </div>
                            </div>

                            <div className="fields">
                                <div className="four wide field">
                                    <label>{this.props.texts['SPECIE']}</label>
                                    <select {...petRace}>
                                        {races.map((race) => {
                                          debugger;
                                            return <option value={race.code}>{race.label}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="four wide field">
                                    <label>{this.props.texts['PET_WEIGHT']}</label>
                                    <input type="number" name="pet-weight" placeholder={this.props.texts['PET_WEIGHT_INFO']} {...petWeight}/>
                                </div>

                                <div className="four wide field">
                                    <label>{this.props.texts['PET_SEX']}</label>
                                    <select {...petSex}>
                                      {sexs.map((sex) => {
                                          return <option value={sex.code}>{sex.label}</option>
                                      })}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="twelve wide field">
                                    <label>{this.props.texts['PET_DESCRIPTION']}</label>
                                    <input type="text" name="pet-description" {...petDescription}/>
                                </div>
                            </div>

                            <h4 className="ui dividing header">Pictures</h4>

                            <div className="fields">
                                <div className="sixteen wide field">
                                    <div>
                                        <label className="ui icon button">
                                            <i className="picture icon"></i>
                                            {this.props.texts['UPLOAD_PICTURE']}</label>
                                        <input type="file" id="file" style={{display:'none'}} />
                                    </div>
                                </div>
                            </div>

                            {this.state.showModal ? <Modal closeModal={this.switchModal.bind(this)}><Album /></Modal> : ""}


                            <button type='submit' className="ui button">{this.props.texts['SUBMIT']}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        texts: state.languageResources.texts || {}
    }
}

export default reduxForm({
    form: 'PetNewForm',
    fields: ['petName', 'petRace', 'petWeight', 'petAge', 'petSex', 'petDescription']
}, mapStateToProps, { createPet })(PetNew);
