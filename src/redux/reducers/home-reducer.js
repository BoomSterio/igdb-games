let initialState = {
  games: null,
  currentPage: 1,
  isFetching: false
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
    case 'homePage/SET_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }
    default:
      return state
  }
}

export default homeReducer
