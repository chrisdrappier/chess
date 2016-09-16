import React, { Component } from 'react'
import Board from './containers/board'
import Turn from './containers/turn'

class AppComponent extends Component {

  render () {
    return (
      <div>
        <Board />
        <Turn />
      </div>
    )
  }
}

export default AppComponent
