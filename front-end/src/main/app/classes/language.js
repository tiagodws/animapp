class Language{
    constructor(){
        const en = {
            HOME_BUTTON: 'Home',
            REGISTER_PET_BUTTON: 'Register a Pet',
            ADOPT_PET_BUTTON: 'Adopt',
            SEARCH: 'Search',
            ADOPT: 'Adopt',
            SPECIE: 'Specie',
            RACE: 'Race',
            SEX: 'Sexo',
            UNDEFINED: 'Undefined',
            WELCOME_TO_ANIMAPP: 'Welcome to Animapp!',
            WHAT_WE_DO: 'We are here to help abandoned pets find a new home.',
            VOLUNTEERS: 'Volunteers',
            ADOPTIONS_THIS_MONTH: 'Adoptions this month',
            DONATED_THIS_MONTH: 'Donated this month',
            WELCOME_TEXT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis dui tellus, rutrum consequat metus vulputate ac. Aliquam eleifend egestas enim, non faucibus ipsum. Vivamus turpis purus, ullamcorper at commodo eu, gravida fermentum eros. Donec suscipit ipsum id erat rhoncus, molestie laoreet ipsum suscipit. Donec ultrices metus volutpat sem pharetra posuere. Nulla sed commodo ipsum. Suspendisse purus augue, blandit ac magna non, ornare consequat lacus. Mauris tincidunt ante efficitur gravida interdum. Pellentesque pulvinar odio sit amet ultricies facilisis. Nunc placerat metus et ante cursus, a tincidunt nunc pulvinar. Aliquam pretium fringilla leo non elementum. Curabitur orci justo, bibendum in pellentesque non, malesuada egestas nunc.',

        }

        const br = {
            HOME_BUTTON: 'Inicio',
            REGISTER_PET_BUTTON: 'Cadastrar um Pet',
            ADOPT_PET_BUTTON: 'Adotar',
            SEARCH: 'Pesquisar',
            ADOPT: 'Adotar',
            SPECIE: 'Espécie',
            RACE: 'Raça',
            SEX: 'Sexo',
            UNDEFINED: 'Indefinido',
            WELCOME_TO_ANIMAPP: 'Seja bem vindo ao Animapp!',
            WHAT_WE_DO: 'Nós ajudamos pets abandonados a encontrarem um novo lar.',
            VOLUNTEERS: 'Voluntários',
            ADOPTIONS_THIS_MONTH: 'Adoções este mês',
            DONATED_THIS_MONTH: 'Doado este mês',
            WELCOME_TEXT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis dui tellus, rutrum consequat metus vulputate ac. Aliquam eleifend egestas enim, non faucibus ipsum. Vivamus turpis purus, ullamcorper at commodo eu, gravida fermentum eros. Donec suscipit ipsum id erat rhoncus, molestie laoreet ipsum suscipit. Donec ultrices metus volutpat sem pharetra posuere. Nulla sed commodo ipsum. Suspendisse purus augue, blandit ac magna non, ornare consequat lacus. Mauris tincidunt ante efficitur gravida interdum. Pellentesque pulvinar odio sit amet ultricies facilisis. Nunc placerat metus et ante cursus, a tincidunt nunc pulvinar. Aliquam pretium fringilla leo non elementum. Curabitur orci justo, bibendum in pellentesque non, malesuada egestas nunc.',

        }


        this.texts = {en, br};
    }
    getText(lang){
        return this.texts[lang];
    }
}

export const language = new Language();




