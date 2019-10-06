import { UPDATE_STATS } from '../actions/types';

const initialState = {
  int: 10,
  str: 3
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
