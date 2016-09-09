import React, { Component } from 'react'

class ReactPiece extends Component {
  render () {
    return (
      <div className="piece">{this.props.piece.render}</div>
    )
  }
}

export default ReactPiece
