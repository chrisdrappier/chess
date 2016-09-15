import { connect } from 'react-redux'
import Board from '../board.js'

function mapStateToProps (state) {
  return {
    chess: state.chess
  }
}

export default connect(mapStateToProps)(Board)
