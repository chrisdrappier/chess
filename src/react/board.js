import React, { Component } from 'react'
import Space from './space'
import { Move } from '../chess'
require('../../stylesheets/chess.css')

class BoardComponent extends Component {

  constructor (props) {
    super(props)
    this.state = { selectedSpace: null, chess: props.chess, availableSpaces: [] }
  }

  handleClick (clickedSpace) {
    if (this.selectedSpace === clickedSpace.index) {
      this.setState({selectedSpace: null, availableSpaces: [], chess: this.chess})
    } else if (this.selectedSpace === null && clickedSpace.piece.constructor.name === 'NullPiece') {
    } else if (this.selectedSpace !== null && clickedSpace.index > -1) {
      this.setState({selectedSpace: null, availableSpaces: [], chess: this.chess.move(this.selectedSpace, clickedSpace.index)})
    } else {
      const currentSpace = this.spaces[clickedSpace.index]
      const newSpace = this.spaces[Math.abs(clickedSpace.index - 64)]
      const availableSpaces = new Move(this.chess, currentSpace, newSpace).availableSpaces
      this.setState({selectedSpace: clickedSpace.index, chess: this.chess, availableSpaces: availableSpaces})
    }
  }

  get chess () { return this.state.chess }
  get board () { return this.chess.board }
  get spaces () { return this.board.spaces }
  get selectedSpace () { return this.state.selectedSpace }
  get selectedPiece () { return this.selectedSpace.piece }
  get availableSpaces () { return this.state.availableSpaces }

  get spaceComponents () {
    return this.spaces.map((space) => {
      return <Space
        space={space}
        key={space.index}
        selected={this.selectedSpace === space.index}
        available={this.availableSpaces.includes(space)}
        handleClick={this.handleClick.bind(this)} />
    })
  }

  render () {
    return <div id="board"><div>{this.spaceComponents}</div></div>
  }
}

export default BoardComponent
