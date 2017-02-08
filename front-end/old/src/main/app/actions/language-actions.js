import {language} from '../classes/language';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const LOAD_LANGUAGE = 'LOAD_LANGUAGE';


export function changeLanguage(lang = 'en'){
    return{
        type: CHANGE_LANGUAGE,
        payload: {language: lang}
    }
}

export function loadLanguage(lang = 'en'){

    const texts = language.getText(lang)

    return{
        type: LOAD_LANGUAGE,
        payload: {texts}
    }
}
