import Image from 'next/image'
import PropTypes from 'prop-types'

const ParallaxImage = ({ src, translateY, imageRef }) => (
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

ParallaxImage.propTypes = {
  src: PropTypes.string.isRequired,
  translateY: PropTypes.number.isRequired,
  imageRef: PropTypes.object,
}

ParallaxImage.defaultProps = {
  imageRef: null,
}

export default ParallaxImage
