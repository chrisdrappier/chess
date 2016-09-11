import React, { Component } from 'react'
import ReactPiece from './piece.js'
class ReactSpace extends Component {
  get space () { return this.props.space }
  get selected () { return this.props.selected }

  get color () { return this.space.color }
  get index () { return this.space.index }
  get piece () { return this.space.piece }

  get pieceComponent () { return <ReactPiece piece={this.piece} /> }

  get className () {
    var classes = ['space', this.color]
    if (this.selected) {
      classes.push('selected')
    }
    return classes.join(' ')
  }

  render () {
    return (
      <div
        className={this.className}
        id={this.index}
        onClick={() => { this.props.handleClick(this) }}>
        {this.index}
        {this.pieceComponent}
      </div>
    )
  }
}

export default ReactSpace
