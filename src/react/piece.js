import React, { Component } from 'react'

class ReactPiece extends Component {

  get className () {
    var colorClass = this.props.piece.color === 'white' ? 'white' : 'black'
    return `piece ${colorClass}`
  }

  render () {
    return (
      <div className={this.className}><div dangerouslySetInnerHTML={{__html: this.props.piece.render}} /></div>
    )
  }
}

export default ReactPiece
