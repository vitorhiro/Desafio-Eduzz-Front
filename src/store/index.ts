import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import persistReducers from './persistReducers.js';

import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducers(rootReducer),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);

export { store, persistor };
