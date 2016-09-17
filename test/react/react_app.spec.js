import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import App from '../../src/react/app_provider'

describe('<App />', () => {
  it('has a board', () => {
    const app = mount(<App />)
    const board = app.find('#board')
    expect(board).to.have.length(1)
  })

  describe('board', () => {
    it('has 64 spaces', () => {
      const app = mount(<App />)
      const spaces = app.find('.space')
      expect(spaces).to.have.length(64)
    })

    it('has 32 pieces', () => {
      const app = mount(<App />)
      const pieces = app.find('.piece')
      expect(pieces).to.have.length(32)
    })
  })

  describe('click', () => {
    it('highlights selected space', () => {
      const app = mount(<App />)
      const space = app.find('#51')
      space.simulate('click')
      const selectedSpace = app.find('.selected')
      expect(selectedSpace).to.have.length(1)
      const availableSpaces = app.find('.available')
      expect(availableSpaces).to.have.length(2)
    })
  })

  it('can change orientiation from white to black')
  it('has a restart game button')
})
