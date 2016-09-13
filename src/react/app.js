import React, { Component } from 'react'
import Chess from '../chess'
import ReactBoard from './board'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { chess: new Chess(), moves: [] }
  }

  get chess () { return this.state.chess }
  get moves () { return this.state.moves }

  render () {
    return (
      <div>
        <ReactBoard chess={this.chess} moves={this.moves} />
      </div>
    )
  }
}

export default App
