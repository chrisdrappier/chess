import React from 'react'
import { render, mount } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import { readFileSync } from 'fs'

import ReactBoard from '../../src/react/board'
import ReactSpace from '../../src/react/space'
import { Chess } from '../../src/chess'

const GetHTML = (fileName) => {
  return readFileSync(`./test/react/fixtures/${fileName}.html`, 'utf-8').slice(0, -1)
}

const simulateMove = (board, current, target) => {
  board.find(`#${current}`).simulate('click')
  board.find(`#${target}`).simulate('click')
}

describe('<ReactBoard />', () => {
  describe('render', () => {
    const board = render(<ReactBoard chess={new Chess()} />)
    it('renders board like snapshot starting_board', () => {
      expect(board.toString()).to.equal(GetHTML('starting_board'))
    })
  })

  describe('mount', () => {
    it('has 64 spaces', () => {
      const board = mount(<ReactBoard chess={new Chess()} />)
      expect(board.find(ReactSpace)).to.have.length(64)
    })

    describe('unselecting the piece', () => {
      const board = mount(<ReactBoard chess={new Chess()} />)
      simulateMove(board, 51, 51)
      it('does not populate moves array', () => {
        expect(board.state().moves).to.have.length(0)
      })
    })

    describe('selecting an empty space', () => {
      const board = mount(<ReactBoard chess={new Chess()} />)
      board.find('#43').simulate('click')
      it('does not set selected space', () => {
        expect(board.state().selectedSpace).to.equal(null)
      })
    })

    describe('moving the piece', () => {
      const board = mount(<ReactBoard chess={new Chess()} />)
      simulateMove(board, 51, 35)
      it('populates moves array', () => {
        expect(board.state().moves).to.have.length(1)
      })

      it('sets the value of the new space', () => {
        expect(board.find('#35').html()).to.contain('♙')
      })

      it('unsets the value of the old space', () => {
        expect(board.find('#51').html()).to.not.contain('♙')
      })

      it('unsets the selectedSpace', () => {
        expect(board.state().selectedSpace).to.equal(null)
      })
    })
  })
})
