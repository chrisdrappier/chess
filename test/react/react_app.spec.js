import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import App from '../../src/react/app'
import chessReducer from '../../src/react/reducers/chess_reducer'

const rootReducer = combineReducers({
  chess: chessReducer
})

const store = createStore(rootReducer)

describe('<App />', () => {
  it('has a board', () => {
    const app = mount(<Provider store={store}><App /></Provider>)
    const board = app.find('#board')
    expect(board).to.have.length(1)
  })

  describe('board', () => {
    it('has 64 spaces', () => {
      const app = mount(<Provider store={store}><App /></Provider>)
      const spaces = app.find('.space')
      expect(spaces).to.have.length(64)
    })

    it('has 64 pieces (half are null)', () => {
      const app = mount(<Provider store={store}><App /></Provider>)
      const pieces = app.find('.piece')
      expect(pieces).to.have.length(64)
    })
  })

  describe('click', () => {
    it('highlights 2 spaces on pawn at starting position', () => {
      const app = mount(<Provider store={store}><App /></Provider>)
      const space = app.find('#51')
      space.simulate('click')
      const availableSpaces = app.find('.available')
      expect(availableSpaces).to.have.length(2)
    })
  })

  it('can change orientiation from white to black')
  it('has a restart game button')
})
