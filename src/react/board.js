import React, { Component } from 'react'
import { Board } from '../chess'
const style = require('../../stylesheets/chess.css')

class ReactBoard extends Component {

  render () {
    var board = new Board()
    var spaces = board.spaces.map((space) => {
      return <div className="space" key={space.index}><b>{space.index}</b></div>
    })
    return <div id="board">{spaces}</div>
  }
}

export default ReactBoard
