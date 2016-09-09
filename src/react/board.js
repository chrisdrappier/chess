import React, { Component } from 'react'
import { Board } from '../chess'
import Space from './space'
const style = require('../../stylesheets/chess.css')

class ReactBoard extends Component {

  render () {
    var board = new Board()
    var spaces = board.spaces.map((space) => {
      return <Space />
    })
    return <div id="board">{spaces}</div>
  }
}

export default ReactBoard
