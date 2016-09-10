import React, { Component } from 'react'
import { Chess } from '../chess'
import ReactBoard from './board'
import ReactMoves from './moves'

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

export default App
