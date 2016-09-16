import React, { Component } from 'react'
import Piece from './piece'

class CapturesComponent extends Component {
  get captures () { return this.props.chess.captures }
  get captureComponents () {
    return this.captures.filter((piece) => {
      return piece.constructor.name !== 'NullPiece'
    }).map((capture, index) => {
      console.log(capture)
      capture.captured = true
      return <Piece piece={capture} key={index} />
    })
  }

  render () {
    return <div id="captures"><div>{this.captureComponents}</div></div>
  }
}

export default CapturesComponent
