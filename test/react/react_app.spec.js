import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import App from '../../src/react/app'

describe('<App />', () => {
  const app = render(<App />)
  it('has one board', () => {
    expect(app.find('div#board').length).to.equal(1)
  })
  it('has one moves container', () => {
    expect(app.find('div#moves').length).to.equal(1)
  })
})
