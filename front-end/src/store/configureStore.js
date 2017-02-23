import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import reducers from './reducers';
import createLogger from 'redux-logger';

function configureStore(initialState) {
  const logger = createLogger();
  const enhancer = compose(
    applyMiddleware(
      logger
    )
  );

  return createStore(reducers, initialState, enhancer);
};

export default configureStore;
