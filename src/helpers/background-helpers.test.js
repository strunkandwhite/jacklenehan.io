import { calculateBackgroundTranslateY } from './background-helpers'

describe('calculating background position', () => {
  it('calculates the position correctly', () => {
    const input = {
      chicagoImageOverflow: 240,
      fromSectionHeight: 720,
      fromSectionScrollStart: 444,
      innerHeight: 954,
      scrollY: 1300,
    }

    expect(calculateBackgroundTranslateY(input)).toEqual(-123)
  })
})
