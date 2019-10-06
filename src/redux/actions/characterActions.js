import { ADD_TO_CHARACTER, REMOVE_FROM_CHARACTER } from './types';
import uuid from 'uuidv4';

export const addToCharacter = item => dispatch => {
  dispatch({
    type: ADD_TO_CHARACTER,
    payload: item.id ? item : { ...item, id: uuid() }
  });
};

export const removeFromCharacter = item => (dispatch, getState) => {
  const { character } = getState();

  const newItems = character.items.filter(it => it.id !== item.id);

  dispatch({
    type: REMOVE_FROM_CHARACTER,
    payload: newItems
  });
};
