import axios from 'axios';

export const CREATE_PET = 'CREATE_PET';
export const LOAD_PETS = 'LOAD_PETS';
export const LOAD_CAT_BREEDS = 'LOAD_CAT_BREEDS';
export const LOAD_DOG_BREEDS = 'LOAD_DOG_BREEDS';

export function createPet(props) {
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

export function loadDogBreeds(){
  const params = {
    specie: '1'
  };
  const request = axios.post('http://localhost:4050/pets/breeds', params);
  return{
    type: LOAD_DOG_BREEDS,
    payload: request
  }
}

export function loadCatBreeds(){
  const params = {
    specie: '2'
  };
  const request = axios.post('http://localhost:4050/pets/breeds', params);
  return{
    type: LOAD_CAT_BREEDS,
    payload: request
  }
}


