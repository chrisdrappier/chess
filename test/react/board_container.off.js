import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import { readFileSync } from 'fs'

import ReactBoard from '../../src/react/containers/board'
import ReactSpace from '../../src/react/space'
import { Chess } from '../../src/chess'
import { Provider } from 'react-redux'
import chessReducer from '../../src/react/reducers/chess_reducer'
import { combineReducers, createStore } from 'redux'
const rootReducer = combineReducers({
  chess: chessReducer
})

const store = createStore(rootReducer)

const GetHTML = (fileName) => {
  return readFileSync(`./test/react/fixtures/${fileName}.html`, 'utf-8').slice(0, -1)
}

const clickSpace = (board, spaceIndex) => {
  board.find(`#${spaceIndex}`).simulate('click')
}

const simulateMove = (board, current, target) => {
  board.find(`#${current}`).simulate('click')
  board.find(`#${target}`).simulate('click')
}

describe('<ReactContainer />', () => {
  describe('snapshot comparison', () => {
    // const board = render(<ReactBoard chess={new Chess()} moves={[]} />)
    it('matches snapshot when rendered') // , () => {
      // expect(board.toString()).to.equal(GetHTML('starting_board'))
    // })
  })

  describe('state', () => {
    it('has 64 spaces', () => {
      const board = mount(<Provider store={store}><ReactBoard chess={new Chess()} /></Provider>)
      expect(board.find(ReactSpace)).to.have.length(64)
    })

    it('highlights legal moves on selection', () => {
      const board = mount(<Provider store={store}><ReactBoard chess={new Chess()} /></Provider>)
      clickSpace(board, 51)
      // TODO make this expectation more in line with it's title. right now it checks one position
      expect(board.find('#35').hasClass('available')).to.equal(true) // node.classList.contains
    })

    describe('when unselecting the piece', () => {
      const board = mount(<Provider store={store}><ReactBoard chess={new Chess()} /></Provider>)
      simulateMove(board, 51, 51)
      it('does not populate moves array')
    })

    describe('when selecting an empty space', () => {
      const board = mount(<Provider store={store}><ReactBoard chess={new Chess()} /></Provider>)
      board.find('#43').simulate('click')
      it('does not set selected space', () => {
        expect(board.state().selectedSpace).to.equal(null)
      })
    })

    describe('when moving the piece', () => {
      const board = mount(<Provider store={store}><ReactBoard chess={new Chess()} /></Provider>)
      simulateMove(board, 51, 35)

      it('sets the value of the new space', () => {
        expect(board.find('#35').html()).to.contain('♟')
      })

      it('unsets the value of the old space', () => {
        expect(board.find('#51').html()).to.not.contain('♟')
      })

      it('unsets the selectedSpace', () => {
        expect(board.state().selectedSpace).to.equal(null)
      })
    })
  })
})
