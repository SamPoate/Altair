import { ADD_TO_INVENTORY } from './types';

export const addToInventory = item => async dispatch => {
  dispatch({
    type: ADD_TO_INVENTORY,
    payload: item
  });
};
