import * as types from './types';

export function fetchClasses() {
  return dispatch => {
    dispatch({
      type: types.FETCH_CLASSES,
      payload: []
    });
  };
};

