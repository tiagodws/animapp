import axios from 'axios';

export const CREATE_PET = 'CREATE_PET';
export const LOAD_PETS = 'LOAD_PETS';

export function createPet(props) {
  debugger;
  return {
    type: CREATE_PET,
    payload: props
  };
}

export function loadPets(){
	const request = axios.get('http://localhost:4050/pets/all');
  return {
    type: LOAD_PETS,
    payload: request
  }
}
