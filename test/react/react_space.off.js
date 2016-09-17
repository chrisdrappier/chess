import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import ReactSpace from '../../src/react/space'
import { Board } from '../../src/chess'

describe('<ReactSpace />', () => {
  const board = new Board()
  const space = render(<ReactSpace space={board.spaces[0]} />)
  it('has a div', () => {
    expect(space.find('div.space')).to.have.length(1)
  })
})
