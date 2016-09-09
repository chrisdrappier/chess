import React, { Component } from 'react'
import ReactPiece from './piece.js'
class ReactSpace extends Component {
  render () {
    return (
      <div
        className={'space ' + this.props.space.color}
        id={this.props.space.index}>
        <ReactPiece piece={this.props.space.piece} />
      </div>
    )
  }
}

export default ReactSpace
