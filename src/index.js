import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import Reducer from './reducer'
import rootSaga from './sagas.js'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(Reducer, 
applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

const render = () => ReactDOM.render(
  <React.StrictMode>
    <App value = {store.getState().value}
        onIncrementAsync = {() => action('INCREMENT_ASYNC')}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

render()
store.subscribe(render)

export const action = type => store.dispatch({type})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
