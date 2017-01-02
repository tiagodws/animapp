import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadPets} from '../actions/pet-actions';
import Pet from '../classes/pet-class';
import PetCard from './pet-card';

class PetList extends Component{

    componentDidMount(){
        this.props.loadPets();
    }

    render(){

        return(
        <div className="ui container">
            <div className="ui three stackable cards">
                {console.log(this.props.petList)}
                {this.props.petList.map(this.renderPet)}
            </div>
            {this.props.children}
        </div>
        )
    }

    renderPet(petData){
		debugger;
		const pet = new Pet();
		pet.setId(petData.id);
		pet.setPublicationDate(new Date(petData.publicationDate));
		pet.setSpecie(petData.specie);
		pet.setRace(petData.race);
		pet.setSex(petData.sex);
		pet.setName(petData.name);
		pet.setDescription(petData.description);
		pet.setWeight(petData.weight);
		pet.setPictures(petData.pictures);
		pet.setOwnerId(petData.ownerId);

        return (<PetCard pet={pet} key={pet.getId()} /> )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({loadPets}, dispatch);
}

function mapStateToProps(state){
    return{
        petList: state.pets && state.pets.petList ? state.pets.petList : []
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PetList);