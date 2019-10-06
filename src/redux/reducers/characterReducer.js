import { UPDATE_STATS } from '../actions/types';

const initialState = {
  int: 27,
  str: 3,
  dex: 1,
  agi: 2,
  wis: 7
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATS:
      return {
        ...state,
        [action.stat]: action.amount
      };

    default:
      return state;
  }
}
