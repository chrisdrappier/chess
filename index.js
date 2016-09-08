import React from 'react'
import ReactDOM from 'react-dom'
import { Board } from './src/chess'

const App = () => {
  var board = new Board()
  return (
    <div>{board.pieces.length}</div>
  )
}
ReactDOM.render(
  <App />
  , document.querySelector('#container'))
