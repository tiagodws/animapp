import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import createLogger from 'redux-logger';

function configureStore(initialState) {
  const logger = createLogger();
  const enhancer = compose(
    applyMiddleware(
	  promise,
      logger
    )
  );

  return createStore(reducers, initialState, enhancer);
};

export default configureStore;
