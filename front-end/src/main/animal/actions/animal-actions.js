import axios from 'axios';

export const CREATE_ANIMAL = 'CREATE_ANIMAL';

export function createAnimal() {
  return {
    type: CREATE_ANIMAL,
    payload: request
  };
}
