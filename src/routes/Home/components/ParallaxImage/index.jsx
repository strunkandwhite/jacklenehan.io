import React from 'react'
import PropTypes from 'prop-types'

const ParallaxImage = ({ src, translateY }) => (
  <img src={src} alt="" style={{ transform: `translate3d(-50%, ${translateY}px, 0)` }} className="parallax" />
)

ParallaxImage.propTypes = {
  src: PropTypes.string.isRequired,
  translateY: PropTypes.number.isRequired,
}

export default ParallaxImage
