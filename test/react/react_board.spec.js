import React from 'react'
import { shallow, render } from 'enzyme'
import {expect} from 'chai'
import { describe, it } from 'mocha'

import ReactBoard from '../../src/react/board'

describe('<Board/>', () => {
  const board = render(<ReactBoard />)
  it('has a div for every space', () => {
    expect(board.find('div.space')).to.have.length(64)
  })

  it('has a board', () => {
    expect(board.find('div#board')).to.have.length(1)
  })
})
