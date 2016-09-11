import React, { Component } from 'react'
import ReactSpace from './space'
require('../../stylesheets/chess.css')

class ReactBoard extends Component {

  constructor (props) {
    super(props)
    this.state = { selectedSpace: null, moves: [], chess: props.chess }
  }

  setSelectedSpace (selectedSpace) {
    if (this.state.selectedSpace !== null && selectedSpace && selectedSpace.index > -1) {
      var newMoves = this.state.moves.slice()
      newMoves.push(`${this.state.selectedSpace} ${selectedSpace.index}`)
      this.setState({selectedSpace: null, moves: newMoves, chess: this.state.chess.move(this.state.selectedSpace, selectedSpace.index)})
    } else {
      this.setState({selectedSpace: selectedSpace.index, chess: this.state.chess, moves: this.state.moves})
    }
  }

  get chess () { return this.state.chess }
  get moves () { return this.chess.moves }
  get board () { return this.chess.board }
  get spaces () { return this.board.spaces }

  get spaceComponents () {
    return this.board.spaces.map((space) => {
      return <ReactSpace
        space={space}
        key={space.index}
        selected={this.state.selectedSpace === space.index}
        setSelectedSpace={this.setSelectedSpace.bind(this)} />
    })
  }

  render () {
    return <div id="board">{this.spaceComponents}</div>
  }
}

export default ReactBoard
