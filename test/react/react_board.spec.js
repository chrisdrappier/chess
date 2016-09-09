import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'
import { describe, it } from 'mocha'

import ReactBoard from '../../src/react/board'

describe('<Board/>', () => {
  it('should have an image to display the gravatar', () => {
    const wrapper = shallow(<ReactBoard />)
    console.log(wrapper)
    expect(wrapper.find('img')).to.have.length(1)
  })

  it('should have props for email and src', () => {
    const wrapper = shallow(<ReactBoard />)
    expect(wrapper.props().email).to.be.defined
    expect(wrapper.props().src).to.be.defined
  })
})
