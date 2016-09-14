import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import App from '../../src/react/app'
import Board from '../../src/react/board'
import Turn from '../../src/react/turn'

describe('<App />', () => {
  it('has a board', () => {
    const app = mount(<App />)
    expect(app.find(Board)).to.have.length(1)
  })

  it('can change orientiation from white to black')
  it('has a restart game button')
})
