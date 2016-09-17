import React from 'react'
import { mount, render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { simulateMove } from './helper'
import App from '../../../src/react/app_provider'

describe('#turn', () => {
  describe('click', () => {
    it('has a turn element', () => {
      const app = render(<App />)
      expect(app.find('#turn')).to.have.length(1)
    })

    it('gets populated when a move happens') // , () => {
    //   const app = mount(<App />)
    //   simulateMove(app, 51, 35)
    //   expect(app.find('#turn')).to.contain('black')
    // })
  })
})
