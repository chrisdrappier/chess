import React, { Component } from 'react'
import Board from './containers/board'
import Chess from '../chess'

class AppComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {chess: new Chess()}
  }

  get chess () { return this.state.chess }

  render () {
    return (
      <div>
        <Board chess={this.chess} />
      </div>
    )
  }
}

export default AppComponent
