import React, { Component } from 'react'
import Piece from './piece.js'
class SpaceComponent extends Component {
  get space () { return this.props.space }
  get selected () { return this.props.selected }
  get available () { return this.props.available }

  get color () { return this.space.color }
  get index () { return this.space.index }
  get piece () { return this.space.piece }
  get row () { return this.space.row }
  get column () { return this.space.column }

  get pieceComponent () {
    if (this.piece.isNull === undefined) {
      return ''
    } else {
      return <Piece piece={this.piece} />
    }
  }

  get className () {
    var classes = ['space', this.color]
    if (this.selected) {
      classes.push('selected')
    } else if (this.available) {
      classes.push('available')
    }
    return classes.join(' ')
  }

  render () {
    return (
      <div
        className={this.className}
        id={this.index}
        onClick={() => { this.props.handleClick(this.space) }}>
        <div className="index"> {this.index} - {this.row} - {this.column}</div>
        {this.pieceComponent}
      </div>
    )
  }
}

export default SpaceComponent
