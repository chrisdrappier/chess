import React, { Component } from 'react'
import App from './app'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import chessReducer from './reducers/chess_reducer'

const rootReducer = combineReducers({
  chess: chessReducer
})

const store = createStore(rootReducer)
class AppProvider extends Component {

  render () {
    return (
      <Provider store={store}><App /></Provider>
    )
  }
}

export default AppProvider
