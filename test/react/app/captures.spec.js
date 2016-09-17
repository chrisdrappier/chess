import React from 'react'
import { mount, render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { simulateMove } from './helper'
import App from '../../../src/react/app_provider'

describe('#captures', () => {
  it('has a captures element', () => {
    const app = render(<App />)
    expect(app.find('#captures')).to.have.length(1)
  })

  it('gets populated when a capture happens (test case needs some work. probably moving to selenium soon.)', () => {
    const app = mount(<App />)
    simulateMove(app, 59, 11)
    expect(app.find('.captured')).to.have.length(1)
  })
})
