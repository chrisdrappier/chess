import React, { Component } from 'react'
import ReactSpace from './space'
require('../../stylesheets/chess.css')

class ReactBoard extends Component {

  constructor (props) {
    super(props)
    this.state = { selectedSpace: null }
    this.setSelectedSpace = this.setSelectedSpace.bind(this)
  }

  setSelectedSpace (selectedSpace) {
    console.log(selectedSpace)
    this.setState({selectedSpace: selectedSpace})
  }

  get chess () { return this.props.chess }
  get board () { return this.chess.board }
  get spaces () { return this.board.spaces }

  get spaceComponents () {
    return this.board.spaces.map((space) => {
      return <ReactSpace
        space={space}
        key={space.index}
        selectedSpace={this.state.selectedSpace}
        setSelectedSpace={this.setSelectedSpace} />
    })
  }
  render () {
    return <div id="board">{this.spaceComponents}</div>
  }
}

export default ReactBoard
