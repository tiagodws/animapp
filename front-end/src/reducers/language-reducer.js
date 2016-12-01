import {CHANGE_LANGUAGE, LOAD_LANGUAGE} from '../main/app/actions/language-actions';


const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case CHANGE_LANGUAGE:
            return {...state, language: action.payload.language};
        case LOAD_LANGUAGE:
            return {...state, texts: action.payload.texts};
        default:
            return state;
    }
}