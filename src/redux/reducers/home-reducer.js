let initialState = {
  games: null,
  currentPage: 1,
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'homePage/SET_GAMES': {
      return {
        ...state,
        games: action.games,
      }
    }
    case 'homePage/SET_PAGE_NUMBER': {
      return {
        ...state,
        currentPage: action.pageNumber,
      }
    }
    default:
      return state
  }
}

export default homeReducer
