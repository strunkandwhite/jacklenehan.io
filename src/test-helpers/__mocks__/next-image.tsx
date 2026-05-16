import React from 'react'

interface ImageMockProps {
  src: string
  alt: string
  style?: React.CSSProperties
  className?: string
}

const Image = ({ src, alt, style, className }: ImageMockProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} style={style} className={className} />
)

export default Image
