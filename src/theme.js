const vars = {
  mainBg: ' rgb(20, 20, 20)',
  poly: 'linear-gradient(180deg, rgba(17,38,57,1) 0%, rgba(7,24,41,1) 100%)',
  accent: 'linear-gradient(180deg, rgba(13,37,59,1) 0%, rgba(6,25,43,1) 100%)',
}

export const darkTheme = {
  main: {
    backgroundColor: vars.mainBg,
  },
  poly: {
    background: vars.poly
  },
  accent: {
    background: vars.accent
  },
  navdrop: {
    backgroundColor: 'rgba(13,23,33,1)',
  },
  modal: {
    background: vars.accentBG,
  },
  card: {
    border: '3px solid rgba($color:  rgba(22,43,64,1), $alpha: .7)',
  },
  title: { backgroundColor: 'rgba($color: $accent, $alpha: .3)' },
  whiteFont: { color: 'white' },
  linkFont: { color: 'rgb(93, 157, 216)' },
}
