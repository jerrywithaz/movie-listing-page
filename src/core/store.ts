import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import appSagas from 'core/sagas';
import reducer, { initialState } from 'core/reducer';

export default function configureStore() {

  let composeEnhancers = composeWithDevTools;

  const sagaMiddleware = createSagaMiddleware({});

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(appSagas);

  return store;

};
