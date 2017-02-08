/**
 * Created by dbuarque on 6/20/16.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import createLogger from 'redux-logger';

function configureStore(initialState) {
  const logger = createLogger();
  const enhancer = compose(
    applyMiddleware(
      thunk,
      logger
    )
  );

  return createStore(reducers, initialState, enhancer);
};

export default configureStore;
