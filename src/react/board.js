import React, { Component } from 'react'
import { Chess } from '../chess'
import ReactSpace from './space'
require('../../stylesheets/chess.css')

class ReactBoard extends Component {

  constructor (props) {
    super(props)
    this.state = {}
    this.setSelectedSpace = this.setSelectedSpace.bind(this)
  }
  setSelectedSpace (selectedSpace) {
    console.log(selectedSpace)
    this.setState({selectedSpace: selectedSpace})
  }
  render () {
    var chess = new Chess()
    var board = chess.board // new Board()
    var spaces = board.spaces.map((space) => {
      return <ReactSpace
        space={space}
        key={space.index}
        selectedSpace={this.state.selectedSpace}
        setSelectedSpace={this.setSelectedSpace} />
    })
    return <div id="board">{spaces}</div>
  }
}

export default ReactBoard
