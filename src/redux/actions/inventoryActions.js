import { ADD_TO_INVENTORY, REMOVE_FROM_INVENTORY } from './types';

export const addToInventory = item => async dispatch => {
  dispatch({
    type: ADD_TO_INVENTORY,
    payload: item
  });
};

export const removeFromInventory = item => async (dispatch, getState) => {
  const { inventory } = getState();

  const newItems = inventory.items.filter(it => it !== item);

  dispatch({
    type: REMOVE_FROM_INVENTORY,
    payload: newItems
  });
};
