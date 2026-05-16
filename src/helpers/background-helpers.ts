interface BackgroundTranslateYParams {
  scrollY: number
  fromSectionScrollStart: number
  fromSectionHeight: number
  innerHeight: number
  chicagoImageOverflow: number
}

export const calculateBackgroundTranslateY = ({
  scrollY,
  fromSectionScrollStart,
  fromSectionHeight,
  innerHeight,
  chicagoImageOverflow,
}: BackgroundTranslateYParams): number => {
  const progressPercentage = (scrollY - fromSectionScrollStart) / (fromSectionHeight + innerHeight)
  const boundedPercentage = Math.max(0, Math.min(1, progressPercentage))
  const backgroundTranslateY = Math.round(boundedPercentage * chicagoImageOverflow * -1)

  return backgroundTranslateY
}
