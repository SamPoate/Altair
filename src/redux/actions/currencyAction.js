import { SET_CROWNS, SET_DREKELS } from './types';

export const setCrowns = amount => async (dispatch, getState) => {
  const { currency } = getState();

  dispatch({
    type: SET_CROWNS,
    payload: currency.crowns - amount
  });
};

export const setDrekels = amount => async (dispatch, getState) => {
  const { currency } = getState();

  dispatch({
    type: SET_DREKELS,
    payload: currency.drekels - amount
  });
};
