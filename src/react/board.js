import React, { Component } from 'react'
import ReactSpace from './space'
require('../../stylesheets/chess.css')

class ReactBoard extends Component {

  constructor (props) {
    super(props)
    this.state = { selectedSpace: null, moves: [], chess: props.chess }
  }

  handleClick (clickedSpace) {
    if (this.selectedSpace === clickedSpace.index) {
      this.setState({selectedSpace: null, chess: this.chess, moves: this.moves})
    } else if (this.selectedSpace !== null && clickedSpace.index > -1) {
      var newMoves = this.moves.slice()
      newMoves.push(`${this.selectedSpace} ${clickedSpace.index}`)
      this.setState({selectedSpace: null, moves: newMoves, chess: this.chess.move(this.selectedSpace, clickedSpace.index)})
    } else if (this.selectedSpace === null && clickedSpace.piece.constructor.name === 'NullPiece') {
    } else {
      this.setState({selectedSpace: clickedSpace.index, chess: this.chess, moves: this.moves})
    }
  }

  get chess () { return this.state.chess }
  get moves () { return this.state.moves }
  get spaces () { return this.chess.board.spaces }
  get selectedSpace () { return this.state.selectedSpace }

  get spaceComponents () {
    return this.spaces.map((space) => {
      return <ReactSpace
        space={space}
        key={space.index}
        selected={this.selectedSpace === space.index}
        handleClick={this.handleClick.bind(this)} />
    })
  }

  render () {
    return <div id="board">{this.spaceComponents}</div>
  }
}

export default ReactBoard
