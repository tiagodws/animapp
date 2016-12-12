import {CREATE_PET, LOAD_PETS} from '../main/animal/actions/pet-actions';
import Pet from '../main/animal/classes/pet-class';

const INITIAL_STATE = {petList: []};

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case CREATE_PET:
            return {...state, retorno: {}};
        case LOAD_PETS:
            return {...state, petList: action.payload.data};
        default:
            return state;
    }
}