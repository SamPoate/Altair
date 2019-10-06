import { UPDATE_STATS } from './types';

export const addToInventory = (stat, amount) => async (dispatch, getState) => {
  const { stats } = getState();
  let newStat = {};

  switch (stat) {
    case 'int':
      newStat = {
        stat: stat,
        amount: stats.int + amount
      };
      break;

    default:
      break;
  }

  dispatch({
    type: UPDATE_STATS,
    payload: newStat
  });
};
