import React, { Component } from 'react'
import Board from './containers/board'
import Turn from './containers/turn'
import Captures from './containers/captures'

class AppComponent extends Component {

  render () {
    return (
      <div>
        <Board />
        <Turn />
        <Captures />
      </div>
    )
  }
}

export default AppComponent
