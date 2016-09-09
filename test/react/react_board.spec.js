import React from 'react'
import { shallow, render } from 'enzyme'
import {expect} from 'chai'
import { describe, it } from 'mocha'

import ReactBoard from '../../src/react/board'

describe('<Board/>', () => {
  it('should have a div for every space', () => {
    const wrapper = render(<ReactBoard />)
    console.log(wrapper)
    expect(wrapper.find('div.space')).to.have.length(64)
  })

  it('should have props for email and src', () => {
    // const wrapper = shallow(<ReactBoard />)
    // expect(wrapper.props().email).to.be.defined
    // expect(wrapper.props().src).to.be.defined
  })
})
