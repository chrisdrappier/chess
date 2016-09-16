import React, { Component } from 'react'

class ReactMoves extends Component {
  get moves () { return this.props.moves }
  get moveComponents () {
    return this.moves.map((move) => {
      return <div id={move} className="move">{move}</div>
    })
  }

  render () {
    return <div id="moves">{this.moveComponents}</div>
  }
}

export default ReactMoves
