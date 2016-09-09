import React, { Component } from 'react'
import { Space } from '../chess'

class ReactSpace extends Component {
  render () {
    var space = new Space(0)
    return <div className="space" key={space.index}><b>{space.index}</b></div>
  }
}

export default ReactSpace
