class Language{
    constructor(){
        const en = {
            //UI
            HOME_BUTTON: 'Home',
            REGISTER_PET_BUTTON: 'Register a Pet',
            ADOPT_PET_BUTTON: 'Adopt',
            SEARCH: 'Search',

            //TEXTS
            ADOPT: 'Adopt',
            TYPE: 'Type',
            RACE: 'Race',
            SEX: 'Sexo',
            UNDEFINED: 'Undefined',
            WELCOME_TO_ANIMAPP: 'Welcome to Animapp!',
            WHAT_WE_DO: 'We are here to help abandoned pets find a new home.'
        }

        const pt = {
            //UI
            HOME_BUTTON: 'Inicio',
            REGISTER_PET_BUTTON: 'Cadastrar um Pet',
            ADOPT_PET_BUTTON: 'Adotar',
            SEARCH: 'Pesquisar',


            //TEXT
            ADOPT: 'Adotar',
            TYPE: 'Tipo',
            RACE: 'Raça',
            SEX: 'Sexo',
            UNDEFINED: 'Indefinido',
            WELCOME_TO_ANIMAPP: 'Seja bem vindo ao Animapp!',
            WHAT_WE_DO: 'Nós ajudamos pets abandonados a encontrarem um novo lar.'
        }


        this.texts = {en, pt};
    }
    getText(lang){
        return this.texts[lang];
    }
}

export const language = new Language();




