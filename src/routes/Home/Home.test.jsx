import React from 'react'
import { render, screen, act } from '@testing-library/react'
import Home from '.'

jest.mock('Src/helpers/background-helpers', () => ({
  calculateBackgroundTranslateY: () => 666,
}))

const mockFromElement = { offsetHeight: 720, offsetTop: 444 }

beforeEach(() => {
  Object.defineProperty(window, 'innerHeight', { value: 954, writable: true })
  jest.spyOn(React, 'createRef').mockReturnValue({ current: mockFromElement })
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()
  })

  it('renders the Chicago section', () => {
    render(<Home />)
    expect(screen.getByText(/I live in Chicago/)).toBeInTheDocument()
  })

  it('requests an animation frame on scroll when not already ticking', () => {
    const rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation(() => 0)
    render(<Home />)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(rafSpy).toHaveBeenCalledTimes(1)
    rafSpy.mockRestore()
  })

  it('does not request a second animation frame while one is pending', () => {
    const rafSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation(() => 0)
    render(<Home />)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new Event('scroll'))
    })
    expect(rafSpy).toHaveBeenCalledTimes(1)
    rafSpy.mockRestore()
  })
})
