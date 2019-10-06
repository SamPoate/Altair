import { ADD_TO_INVENTORY, REMOVE_FROM_INVENTORY } from './types';
import uuid from 'uuidv4';

export const addToInventory = item => dispatch => {
  dispatch({
    type: ADD_TO_INVENTORY,
    payload: item.id ? item : { ...item, id: uuid() }
  });
};

export const removeFromInventory = item => (dispatch, getState) => {
  const { inventory } = getState();

  const newItems = inventory.items.filter(it => it.id !== item.id);

  dispatch({
    type: REMOVE_FROM_INVENTORY,
    payload: newItems
  });
};
