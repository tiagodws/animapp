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
            PET_NAME: 'Pet name',
            PET_WEIGHT: 'Weight',
            PET_WEIGHT_INFO: 'Pet weight in g',
            PET_AGE: 'Months',
            PET_AGE_INFO: 'Age in months',
            UPLOAD_PICTURE: 'Upload picture',
            UNDEFINED: 'Undefined',
            WELCOME_TO_ANIMAPP: 'Welcome to Animapp!',
            WHAT_WE_DO: 'We are here to help abandoned pets find a new home.',
            VOLUNTEERS: 'Volunteers',
            ADOPTIONS_THIS_MONTH: 'Adoptions this month',
            DONATED_THIS_MONTH: 'Donated this month',
            WELCOME_TEXT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis dui tellus, rutrum consequat metus vulputate ac. Aliquam eleifend egestas enim, non faucibus ipsum. Vivamus turpis purus, ullamcorper at commodo eu, gravida fermentum eros. Donec suscipit ipsum id erat rhoncus, molestie laoreet ipsum suscipit. Donec ultrices metus volutpat sem pharetra posuere. Nulla sed commodo ipsum. Suspendisse purus augue, blandit ac magna non, ornare consequat lacus. Mauris tincidunt ante efficitur gravida interdum. Pellentesque pulvinar odio sit amet ultricies facilisis. Nunc placerat metus et ante cursus, a tincidunt nunc pulvinar. Aliquam pretium fringilla leo non elementum. Curabitur orci justo, bibendum in pellentesque non, malesuada egestas nunc.',
            NEW_PET_INFO_CONTENT_1: 'Provide as much information as possible',
            NEW_PET_INFO_CONTENT_2: 'Fill this form to list a new pet that needs help!',
            NEW_PET_CARE_CONTENT_1: 'Take care of the pet until we find him a new family',
            NEW_PET_CARE_CONTENT_2: "Don't let a living soul in the streets!",
            SUBMIT: 'Submit',

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
            PET_NAME: 'Nome do animal',
            PET_WEIGHT: 'Peso',
            PET_WEIGHT_INFO: 'Peso em gr',
            PET_AGE: 'Meses',
            PET_AGE_INFO: 'Idade em meses',
            UPLOAD_PICTURE: 'Upload picture',
            UNDEFINED: 'Indefinido',
            WELCOME_TO_ANIMAPP: 'Seja bem vindo ao Animapp!',
            WHAT_WE_DO: 'Nós ajudamos pets abandonados a encontrarem um novo lar.',
            VOLUNTEERS: 'Voluntários',
            ADOPTIONS_THIS_MONTH: 'Adoções este mês',
            DONATED_THIS_MONTH: 'Doado este mês',
            WELCOME_TEXT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis dui tellus, rutrum consequat metus vulputate ac. Aliquam eleifend egestas enim, non faucibus ipsum. Vivamus turpis purus, ullamcorper at commodo eu, gravida fermentum eros. Donec suscipit ipsum id erat rhoncus, molestie laoreet ipsum suscipit. Donec ultrices metus volutpat sem pharetra posuere. Nulla sed commodo ipsum. Suspendisse purus augue, blandit ac magna non, ornare consequat lacus. Mauris tincidunt ante efficitur gravida interdum. Pellentesque pulvinar odio sit amet ultricies facilisis. Nunc placerat metus et ante cursus, a tincidunt nunc pulvinar. Aliquam pretium fringilla leo non elementum. Curabitur orci justo, bibendum in pellentesque non, malesuada egestas nunc.',
            NEW_PET_INFO_CONTENT_1: 'Forneça o máximo de informação possível',
            NEW_PET_INFO_CONTENT_2: 'Preencha este formulário para cadastrar um animal de estimação que precisa de ajuda!',
            NEW_PET_CARE_CONTENT_1: 'Cuide do animal de estimação até encontrarmos uma nova família',
            NEW_PET_CARE_CONTENT_2: "Não deixe uma alma viva nas ruas!",
            SUBMIT: 'Cadastrar',
        }


        this.texts = {en, br};
    }
    getText(lang){
        return this.texts[lang];
    }
}

export const language = new Language();




