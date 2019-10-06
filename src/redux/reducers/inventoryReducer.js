import { ADD_TO_INVENTORY } from '../actions/types';

const initialState = {
  items: [],
  slots: 14
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_INVENTORY:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
}
