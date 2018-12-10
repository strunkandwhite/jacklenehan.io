export const calculateBackgroundTranslateY = ({
  scrollY,
  fromSectionScrollStart,
  fromSectionHeight,
  innerHeight,
  chicagoImageOverflow,
}) => {
  const progressPercentage = (scrollY - fromSectionScrollStart) / (fromSectionHeight + innerHeight)
  const boundedPercentage = Math.max(0, Math.min(1, progressPercentage))
  const backgroundTranslateY = Math.round(boundedPercentage * chicagoImageOverflow * -1)

  return backgroundTranslateY
}
