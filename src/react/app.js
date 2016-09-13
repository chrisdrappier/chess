import React, { Component } from 'react'
import Chess from '../chess'
import ReactBoard from './board'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { chess: new Chess() }
  }

  get chess () { return this.state.chess }

  render () {
    return (
      <div>
        <ReactBoard chess={this.chess} />
      </div>
    )
  }
}

export default App
