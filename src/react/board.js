import React, { Component } from 'react'
import Space from './space'
require('../../stylesheets/chess.css')

class BoardComponent extends Component {

  get chess () { return this.props.chess }
  get board () { return this.chess.board }
  get spaces () { return this.board.spaces }
  get selectedSpace () { return this.board.selectedSpace }
  get selectedPiece () { return this.selectedSpace.piece }
  get availableSpaces () { return this.props.chess.availableSpaces }

  get spaceComponents () {
    return this.spaces.map((space) => {
      return <Space
        space={space}
        key={space.index}
        selected={this.selectedSpace === space}
        available={this.board.availableSpaces.includes(space)}
        handleClick={this.props.onBoardClick} />
    })
  }

  render () {
    return <div id="board"><div>{this.spaceComponents}</div></div>
  }
}

export default BoardComponent
