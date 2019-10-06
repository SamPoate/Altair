import { createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : x => x
    )
  );
}
