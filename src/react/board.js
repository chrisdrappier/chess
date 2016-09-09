import React, { Component } from 'react'
import { Board } from '../chess'

class ReactBoard extends Component {

  render () {
    var board = new Board()
    return <div id="board">{board.spaces.length}</div>
  }
}

export default ReactBoard
