import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PetReducer from './pet-reducer';

const rootReducer = combineReducers({
  pets: PetReducer,
  form: formReducer
});

export default rootReducer;
