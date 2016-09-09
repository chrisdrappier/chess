import React from 'react'
import { shallow, render } from 'enzyme'
import {expect} from 'chai'
import { describe, it } from 'mocha'

import ReactSpace from '../../src/react/space'

describe('<Space />', () => {
  const space = render(<ReactSpace />)

  it('has a div', () => {
    expect(space.find('div.space')).to.have.length(1)
  })
})
