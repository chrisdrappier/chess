import { connect } from 'react-redux'
import Captures from '../captures'

const mapStateToProps = (state) => {
  return {
    chess: state.chess
  }
}

export default connect(mapStateToProps)(Captures)
