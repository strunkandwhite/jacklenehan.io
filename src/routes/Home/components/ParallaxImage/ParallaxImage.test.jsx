import React from 'react'
import { shallow } from 'enzyme'
import ParallaxImage from '.'

describe('ParallaxImage', () => {
  let props
  let wrapper

  const parallaxImage = () => {
    if (!wrapper) {
      wrapper = shallow(<ParallaxImage {...props} />)
    }
    return wrapper
  }

  beforeEach(() => {
    props = {
      src: 'foo.jpg',
      translateY: 123,
    }

    wrapper = undefined
  })

  describe('render', () => {
    it('renders without crashing', () => {
      parallaxImage()
    })
  })
})
