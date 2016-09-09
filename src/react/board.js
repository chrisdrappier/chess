import React, { Component } from 'react'
import { Board } from '../chess'
import ReactSpace from './space'
require('../../stylesheets/chess.css')

class ReactBoard extends Component {

  render () {
    var board = new Board()
    var spaces = board.spaces.map((space) => {
      return <ReactSpace space={space} />
    })
    return <div id="board">{spaces}</div>
  }
}

export default ReactBoard
