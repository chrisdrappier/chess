import React, { Component } from 'react'
import Space from './space'
require('../../stylesheets/chess.css')

class BoardComponent extends Component {

  constructor (props) {
    super(props)
    this.state = { selectedSpace: null, chess: props.chess }
  }

  handleClick (clickedSpace) {
    if (this.selectedSpace === clickedSpace.index) {
      this.setState({selectedSpace: null, chess: this.chess})
    } else if (this.selectedSpace === null && clickedSpace.piece.constructor.name === 'NullPiece') {
    } else if (this.selectedSpace !== null && clickedSpace.index > -1) {
      this.setState({selectedSpace: null, chess: this.chess.move(this.selectedSpace, clickedSpace.index)})
    } else {
      this.setState({selectedSpace: clickedSpace.index, chess: this.chess})
    }
  }

  get chess () { return this.state.chess }
  get moves () { return this.state.moves }
  get spaces () { return this.chess.board.spaces }
  get selectedSpace () { return this.state.selectedSpace }

  get spaceComponents () {
    return this.spaces.map((space) => {
      return <Space
        space={space}
        key={space.index}
        selected={this.selectedSpace === space.index}
        handleClick={this.handleClick.bind(this)} />
    })
  }

  render () {
    return <div id="board"><div>{this.spaceComponents}</div></div>
  }
}

export default BoardComponent
