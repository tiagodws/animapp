import {language} from '../classes/language';

export const LOAD_LANGUAGE = 'LOAD_LANGUAGE';



export function loadLanguage(lang = 'en'){

    const texts = language.getText(lang)

    return{
        type: LOAD_LANGUAGE,
        payload: {texts}
    }
}
