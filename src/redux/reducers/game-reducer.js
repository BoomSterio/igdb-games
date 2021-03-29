let initialState = {
  info: null,
  cover: null,
  companies: null,
  screenshots: null,
  isFetching: false
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'gamePage/SET_INFO': {
      return {
        ...state,
        info: action.info,
      }
    }
    case 'gamePage/SET_COVER': {
      return {
        ...state,
        cover: action.cover,
      }
    }
    case 'gamePage/SET_COMPANIES': {
      return {
        ...state,
        companies: action.companies,
      }
    }
    case 'gamePage/SET_SCREENSHOTS': {
      return {
        ...state,
        screenshots: action.screenshots,
      }
    }
    case 'gamePage/CLEAR_INFO': {
      return {
        ...state,
        info: null,
        cover: null,
        companies: null,
        screenshots: null,
      }
    }
    case 'gamePage/SET_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    default:
      return state
  }
}

export default gameReducer
