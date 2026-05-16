const Image = ({ src, alt, style, className }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} style={style} className={className} />
)

export default Image
