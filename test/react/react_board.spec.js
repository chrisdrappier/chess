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

describe('<ReactBoard />', () => {
  describe('render', () => {
    const board = render(<ReactBoard chess={new Chess()} />)
    it('renders board like snapshot starting_board', () => {
      expect(board.toString()).to.equal(GetHTML('starting_board'))
    })
  })

  describe('mount', () => {
    const board = mount(<ReactBoard chess={new Chess()} />)
    it('has 64 spaces', () => {
      expect(board.find(ReactSpace)).to.have.length(64)
    })
    it('sets selectedSpace when clicked', () => {
      var space = board.find('#26')
      expect(board.state().selectedSpace).to.equal(null)
      space.simulate('click')
      expect(board.state().selectedSpace).to.equal(26)
    })
  })
})
