import React, { Component } from 'react'

class TurnComponent extends Component {

  render () {
    return (
      <div id="turn">Turn: {this.props.turn}</div>
    )
  }
}

export default TurnComponent
