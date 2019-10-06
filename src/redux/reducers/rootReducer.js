import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import inventoryReducer from './inventoryReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  inventory: inventoryReducer,
  stats: statsReducer
});

export default rootReducer;
