import React, { Component } from 'react'

class ReactMoves extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  get moveComponents () {
    return this.props.moves.map((move) => {
      return <div id={move} className="move">{move}</div>
    })
  }

  render () {
    return <div id="moves">{this.moveComponents}</div>
  }
}

export default ReactMoves
