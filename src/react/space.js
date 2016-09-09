import React, { Component } from 'react'

class ReactSpace extends Component {
  render () {
    return (
      <div
        className={'space ' + this.props.space.color}
        key={this.props.space.index}>
      </div>
    )
  }
}

export default ReactSpace
