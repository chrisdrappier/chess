import React, { Component } from 'react'
import ReactPiece from './piece.js'
class ReactSpace extends Component {
  render () {
    const selected = (this.props.selectedSpace ? ' selected' : '')
    return (
      <div
        className={'space ' + this.props.space.color + selected}
        id={this.props.space.index}>
        <ReactPiece piece={this.props.space.piece} />
      </div>
    )
  }

  setSelectedSpace () {
    return this.props.setSelectedSpace(this)
  }
}

export default ReactSpace
