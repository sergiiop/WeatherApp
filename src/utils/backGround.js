export const backGroundColor = (condition, time) => {
  let dayOrNight = ''
  if (time) {
    dayOrNight = 'Day'
  } else {
    dayOrNight = 'Nigth'
  }
  return `${condition}${dayOrNight}`
}

export const backGroundsCitys = {
  OvercastDay: 'linear-gradient(to right top, #4c4e59, #595b67, #656875, #737583, #808392, #8b8e9d, #9598a8, #a0a3b3, #abaebc, #b6b8c6, #c1c3cf, #ccced9)',
  OvercastNigth: 'linear-gradient(to right top, #4c4e59, #595b67, #656875, #737583, #808392, #8b8e9d, #9598a8, #a0a3b3, #abaebc, #b6b8c6, #c1c3cf, #ccced9)',
  'Partly cloudyDay': 'linear-gradient(to right top, #0367a6, #1a6dab, #2873af, #347ab4, #3e80b9, #538bbf, #6697c6, #78a2cc, #96b5d5, #b4c9df, #d2dde8, #f0f1f2)',
  'Partly cloudyNigth': 'linear-gradient(to right top, #8e8be2, #8586dc, #7c80d5, #737bcf, #6a76c8, #6d7dcb, #7184ce, #768bd0, #8aa0dc, #9fb5e7, #b6cbf2, #cfe0fc);',
  'Moderate or heavy rain with thunderNigth': 'linear-gradient(to right top, #a197a6, #948a9c, #867e92, #787288, #6a667f, #5f5d77, #55546e, #4a4c66, #42445c, #3a3c53, #323549, #2a2d40);',
  'Moderate or heavy rain with thunderDay': 'linear-gradient(to right top, #8d93a6, #9099b4, #93a0c2, #95a6d0, #97addf, #8ea7da, #86a0d6, #7d9ad1, #6986b9, #5572a1, #425f8a, #2f4c73)'
}
