import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import inventoryReducer from './inventoryReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  inventory: inventoryReducer
});

export default rootReducer;
