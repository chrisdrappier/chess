import React, { Component } from 'react'

class ReactSpace extends Component {
  render () {
    return (
      <div
        className={'space ' + this.props.space.color}
        key={this.props.space.index}>
         {this.props.space.row} - {this.props.space.column} - {this.props.space.index}
        <div className="piece">{this.props.space.piece.render}</div>
      </div>
    )
  }
}

export default ReactSpace
