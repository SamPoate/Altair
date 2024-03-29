import { UPDATE_STATS } from './types';

export const addToInventory = (stat, amount) => async (dispatch, getState) => {
  const { stats } = getState();
  let newStat = {
    stat: stat,
    amount: stats[stat] + amount
  };

  dispatch({
    type: UPDATE_STATS,
    payload: newStat
  });
};
