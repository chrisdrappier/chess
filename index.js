import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Chess } from './src/chess'
import ReactBoard from './src/react/board'
import ReactMoves from './src/react/moves'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { chess: new Chess() }
  }

  get chess () { return this.state.chess }
  get moves () { this.state.chess.moves }

  render () {
    return (
      <div>
        <ReactBoard chess={this.chess} />
        <ReactMoves moves={this.moves} />
      </div>
    )
  }
}
ReactDOM.render(
  <App />
  , document.querySelector('#container'))
