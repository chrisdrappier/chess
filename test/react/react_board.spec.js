import React from 'react'
import { mount, shallow } from 'enzyme'
import {expect} from 'chai'

import ReactBoard from '../../../src/react/board'

describe('<Board/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(ReactBoard)
    expect(wrapper.find('img')).to.have.length(1)
  })

  it('should have props for email and src', function () {
    const wrapper = shallow(ReactBoard)
    expect(wrapper.props().email).to.be.defined
    expect(wrapper.props().src).to.be.defined
  })
})
