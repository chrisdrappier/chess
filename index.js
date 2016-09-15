import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './src/react/app'
import chessReducer from './src/react/reducers/chess_reducer'

const rootReducer = combineReducers({
  chess: chessReducer
})

const store = createStore(rootReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#container'))
