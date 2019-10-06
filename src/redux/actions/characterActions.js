import { ADD_TO_CHARACTER, REMOVE_FROM_CHARACTER } from './types';

export const addToCharacter = item => async dispatch => {
  dispatch({
    type: ADD_TO_CHARACTER,
    payload: item
  });
};

export const removeFromCharacter = item => async (dispatch, getState) => {
  const { character } = getState();

  const newItems = character.items.filter(it => it !== item);

  dispatch({
    type: REMOVE_FROM_CHARACTER,
    payload: newItems
  });
};
