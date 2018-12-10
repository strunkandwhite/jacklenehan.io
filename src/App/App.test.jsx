import React from 'react'
import { mount } from 'enzyme'
import App from '.'

describe('App', () => {
  let wrapper

  const app = () => {
    if (!wrapper) {
      wrapper = mount(<App />)
    }
    return wrapper
  }

  beforeEach(() => {
    wrapper = undefined
  })

  describe('render', () => {
    it('renders without crashing', () => {
      app()
    })
  })
})
