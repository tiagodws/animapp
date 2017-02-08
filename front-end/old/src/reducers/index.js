import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PetReducer from './pet-reducer';
import LanguageReducer from './language-reducer';

const rootReducer = combineReducers({
  pets: PetReducer,
  languageResources: LanguageReducer,
  form: formReducer,
});

export default rootReducer;
