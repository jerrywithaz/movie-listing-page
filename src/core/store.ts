import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import appSagas from 'core/sagas';
import reducer, { initialState } from 'core/reducer';
import { AppState, AppStore } from './types';

export default function configureStore(state?: AppState): AppStore {

  const sagaMiddleware = createSagaMiddleware({});

  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    reducer,
    state || initialState,
    composeWithDevTools(...enhancers),
  );

  sagaMiddleware.run(appSagas);

  return store;

};
