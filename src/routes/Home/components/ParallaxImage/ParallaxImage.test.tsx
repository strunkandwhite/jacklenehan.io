import React from 'react'
import { render } from '@testing-library/react'
import ParallaxImage from '.'

describe('ParallaxImage', () => {
  it('renders an image with the correct src', () => {
    const { container } = render(<ParallaxImage src="/foo.jpg" translateY={123} />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/foo.jpg')
  })

  it('applies the translateY as a transform style', () => {
    const { container } = render(<ParallaxImage src="/foo.jpg" translateY={123} />)
    const img = container.querySelector('img')
    expect((img as HTMLImageElement).style.transform).toBe('translateY(123px)')
  })
})
