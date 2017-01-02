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
            SUBMIT: 'Submit',
            PET_SEX: 'Pet sex',
            PET_DESCRIPTION: 'Pet description',
            PET_OWNER: 'Pet owner',
            HELP_PET_TEXT: 'Help a new pet',
            PET_INFO: 'Pet Info',
            OTHER_INFORMATION: 'Other inforrmation',
            CASTRATED: 'Castrated',
            DEWORMED: 'Dewormed'
        };
        this.texts = {en};
    }
    getText(lang){
        return this.texts[lang];
    }
}

export const language = new Language();




