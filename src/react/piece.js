import React, { Component } from 'react'

class PieceComponent extends Component {
  get className () {
    var classes = ['piece', this.color]
    if (this.props.piece.color === 'white') {
      classes.push('white')
    } else {
      classes.push('black')
    }

    if (this.props.piece.captured) {
      classes.push('captured')
    }
    return classes.join(' ')
  }

  render () {
    return (
      <div className={this.className}><div dangerouslySetInnerHTML={{__html: this.props.piece.render}} /></div>
    )
  }
}

export default PieceComponent
