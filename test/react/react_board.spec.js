import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import ReactBoard from '../../src/react/board'

describe('<ReactBoard />', () => {
  const board = render(<ReactBoard />)
  it('renders a div for every space', () => {
    expect(board.find('div.space')).to.have.length(64)
  })

  it('renders a board', () => {
    expect(board.find('div#board')).to.have.length(1)
  })
})
