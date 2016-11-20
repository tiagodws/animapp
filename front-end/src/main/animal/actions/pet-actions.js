import axios from 'axios';

export const CREATE_PET = 'CREATE_PET';

export function createAnimal() {
  return {
    type: CREATE_PET,
    payload: request
  };
}
