import React from 'react'
import ReactDOM from 'react-dom'

import ReactBoard from './src/react/board'

const App = () => {
  return (
    <ReactBoard />
  )
}
ReactDOM.render(
  <App />
  , document.querySelector('#container'))
