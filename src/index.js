import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { fetchTweets } from './actions/actions'
import rootReducer from './reducers/reducers'
import React from 'react';
import App from './components/App';
import './index.css';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, //// lets us dispatch() functions
    loggerMiddleware  // neat middleware that logs actions
  )
)

store.dispatch(fetchTweets('Javascript')).then( () =>{
  }
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
