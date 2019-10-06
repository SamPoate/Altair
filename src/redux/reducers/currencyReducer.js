import { SET_DREKELS, SET_CROWNS } from '../actions/types';

const initialState = {
  crowns: 1,
  drekels: 25
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CROWNS:
      return {
        ...state,
        crowns: action.payload
      };

    case SET_DREKELS:
      return {
        ...state,
        drekels: action.payload
      };
    default:
      return state;
  }
}
