import React, { Component } from 'react'

class TurnComponent extends Component {

  render () {
    console.log('rendering turn')
    return (
      <div className="turn">TUUURRRRRNNNNNNS{this.props.turn}</div>
    )
  }
}

export default TurnComponent
