import React from 'react'
import { render, shallow } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import ReactSpace from '../../src/react/space'
import {Space} from '../../src/chess.js'

describe('<Space />', () => {
  const space = shallow(<ReactSpace space={new Space(1)} />)

  it('has a div', () => {
    expect(space.find('div.space')).to.have.length(1)
  })

  it('has a space', () => {
    console.log('------------------------------')
    console.log(space.props)
    //expect(space.props).to.equal('test!')
  })
})
