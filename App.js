import React, {useEffect} from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useDispatch } from 'react-redux';
import createSagaMiddleware  from 'redux-saga';
import RootNavigation from  './src/navigation/Router';
import reducer from './src/store/reducers/reducer';
import rootSaga from './src/store/sagas/rootSaga'

const allReducers = combineReducers({
  youtube: reducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

