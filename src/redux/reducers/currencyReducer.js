import { SET_SHEKELS } from '../actions/types';

const initialState = {
  shekels: 25
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SHEKELS:
      return {
        ...state,
        shekels: action.payload
      };
    default:
      return state;
  }
}
