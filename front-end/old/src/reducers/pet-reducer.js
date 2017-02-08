import {CREATE_PET, LOAD_PETS, LOAD_CAT_BREEDS, LOAD_DOG_BREEDS} from '../main/animal/actions/pet-actions';
import Pet from '../main/animal/classes/pet-class';

const INITIAL_STATE = {petList: [], catBreeds: [], dogBreeds: []};

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case CREATE_PET:
            return {...state, retorno: {}};
        case LOAD_PETS:
            return {...state, petList: action.payload.data};
        case LOAD_CAT_BREEDS:
            debugger;
            return {...state, catBreeds: action.payload.data};
        case LOAD_DOG_BREEDS:
            debugger;
            return {...state, dogBreeds: action.payload.data};
        default:
            return state;
    }
}