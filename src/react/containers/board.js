import { connect } from 'react-redux'
import Board from '../board.js'
import { boardClick } from '../actions'

const mapStateToProps = (state) => {
  return {
    chess: state.chess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoardClick: (space) => {
      dispatch(boardClick(space))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
