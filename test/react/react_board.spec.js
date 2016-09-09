import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import { readFileSync } from 'fs'

import ReactBoard from '../../src/react/board'

const GetHTML = (fileName) => {
  return readFileSync(`/Users/cwdrappier/projects/chess/source/chess/test/react/fixtures/${fileName}.html`, 'utf-8').slice(0, -1)
}

const RendersBoardLike = (board, fileName) => {
  it('renders board correctly', () => {
    expect(board.toString()).to.equal(GetHTML(fileName))
  })
}
describe('<ReactBoard />', () => {
  const board = render(<ReactBoard />)
  RendersBoardLike(board, 'starting_board')
})
