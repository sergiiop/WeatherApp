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
  'Partly cloudyNigth': 'radial-gradient( circle 674px at 18.3% 77%, rgba(139,186,244,1) 3.4%, rgba(15,51,92,1) 56.6% );',
  'Moderate or heavy rain with thunderNigth': 'linear-gradient(to right top, #a197a6, #948a9c, #867e92, #787288, #6a667f, #5f5d77, #55546e, #4a4c66, #42445c, #3a3c53, #323549, #2a2d40);',
  'Moderate or heavy rain with thunderDay': 'linear-gradient(to right top, #8d93a6, #9099b4, #93a0c2, #95a6d0, #97addf, #8ea7da, #86a0d6, #7d9ad1, #6986b9, #5572a1, #425f8a, #2f4c73)',
  'Moderate rain at timesNigth': 'radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% )',
  ClearNigth: 'linear-gradient( 181deg,  rgba(2,0,97,1) 15%, rgba(97,149,219,1) 158.5% )'
}
