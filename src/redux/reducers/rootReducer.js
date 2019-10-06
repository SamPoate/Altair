import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import inventoryReducer from './inventoryReducer';
import statsReducer from './statsReducer';
import characterReducer from './characterReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  inventory: inventoryReducer,
  stats: statsReducer,
  character: characterReducer
});

export default rootReducer;
