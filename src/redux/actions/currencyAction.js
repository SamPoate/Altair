import { SET_SHEKELS } from './types';

export const setShekels = amount => async dispatch => {
  dispatch({
    action: SET_SHEKELS,
    payload: amount
  });
};
