export const gameActions = {
  setInfo: info => ({ type: 'gamePage/SET_INFO', info }),
  setCover: cover => ({ type: 'gamePage/SET_COVER', cover }),
  setCompanies: companies => ({ type: 'gamePage/SET_COMPANIES', companies }),
  setScreenshots: screenshots => ({
    type: 'gamePage/SET_SCREENSHOTS',
    screenshots,
  }),
  clearInfo: () => ({ type: 'gamePage/CLEAR_INFO' }),
}
