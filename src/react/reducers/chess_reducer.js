import Chess from '../../chess'
export default function (chess = new Chess(), action) {
  switch (action.type) {
    case 'BOARD_CLICK':
      return chess.click(action.space)
    default:
      return chess
  }
}
