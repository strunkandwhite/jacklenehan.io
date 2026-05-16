import Image from 'next/image'
import { RefObject } from 'react'

interface ParallaxImageProps {
  src: string
  translateY: number
  imageRef?: RefObject<HTMLImageElement | null> | null
}

const ParallaxImage = ({ src, translateY, imageRef = null }: ParallaxImageProps) => (
  <Image
    ref={imageRef}
    src={src}
    alt=""
    width={5443}
    height={3626}
    sizes="100vw"
    priority
    style={{ transform: `translateY(${translateY}px)` }}
    className="parallax"
  />
)

export default ParallaxImage
