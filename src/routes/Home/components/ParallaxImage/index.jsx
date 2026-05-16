import Image from 'next/image'

const ParallaxImage = ({ src, translateY, imageRef = null }) => (
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
