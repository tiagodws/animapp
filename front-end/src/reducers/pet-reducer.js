import {CREATE_PET, LOAD_PETS} from '../main/animal/actions/pet-actions';
import Pet from '../main/animal/classes/pet';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case CREATE_PET:
            return {...state, retorno: {}};
        case LOAD_PETS:
            const petList = action.payload.data.map(petData=>{
                const pictures = [petData.picture1, petData.picture2, petData.picture3];

                const pet = new Pet();
                pet.setId(petData.id);
				pet.setPublicationDate(new Date(petData.publicationDate));
				pet.setSpecie(petData.specie);
				pet.setRace(petData.race);
				pet.setSex(petData.sex);
                pet.setName(petData.name);
                pet.setDescription(petData.description);
				pet.setWeight(petData.weight);
                pet.setPictures(pictures);
                return pet;
            });
            return {...state, petList};
        default:
            return state;
    }
}