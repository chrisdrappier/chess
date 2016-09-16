import { connect } from 'react-redux'
import Turn from '../turn.js'

const mapStateToProps = (state) => {
  return {
    turn: state.chess.turn
  }
}

export default connect(mapStateToProps)(Turn)
