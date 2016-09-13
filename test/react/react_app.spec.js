import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import App from '../../src/react/app'
import ReactBoard from '../../src/react/board'

describe('<App />', () => {
  const app = mount(<App />)
  it('has a board', () => {
    expect(app.find(ReactBoard)).to.have.length(1)
  })

  it('has moves') // , () => {
    // expect(app.find(ReactMoves)).to.have.length(1)
  // })
})
