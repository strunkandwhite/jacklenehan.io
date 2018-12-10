import React from 'react'
import { mount } from 'enzyme'
import Home from '.'

jest.mock('Src/helpers/background-helpers', () => ({
  calculateBackgroundTranslateY: () => 666,
}))

describe('Home', () => {
  let wrapper

  const app = () => {
    if (!wrapper) {
      wrapper = mount(<Home />)
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

  describe('scroll behavior', () => {
    beforeEach(() => {
      global.requestAnimationFrame = jest.fn()
    })

    it('requests an animation frame on scroll if no other frame has been requested', () => {
      app()
        .instance()
        .handleScroll()
      expect(global.requestAnimationFrame.mock.calls.length).toBe(1)
    })

    it('does not request an animation frame on scroll if another frame has been requested', () => {
      app().instance().ticking = true
      app()
        .instance()
        .handleScroll()
      expect(global.requestAnimationFrame.mock.calls.length).toBe(0)
    })
  })

  describe('animation frame', () => {
    it('sets ticking to false', () => {
      app().instance().ticking = true
      app()
        .instance()
        .animationFrame()
      expect(app().instance().ticking).toBe(false)
    })

    it('sets state', () => {
      app().instance().calculateBackgroundTranslateY = jest.fn().mockReturnValue(666)
      app()
        .instance()
        .animationFrame()
      expect(app().instance().state.backgroundTranslateY).toBe(666)
    })
  })
})
