let initialState = {
    info: null,
    cover: null,
    companies: null,
    screenshots: null
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'gamePage/SET_INFO': {
            return {
                ...state,
                info: action.info
            }
        }
        case 'gamePage/SET_COVER': {
            return {
                ...state,
                cover: action.cover
            }
        }
        case 'gamePage/SET_COMPANIES': {
            return {
                ...state,
                companies: action.companies
            }
        }
        case 'gamePage/SET_SCREENSHOTS': {
            return {
                ...state,
                screenshots: action.screenshots
            }
        }
        case 'gamePage/CLEAR_INFO': {
            return {
                ...state,
                info: null,
                cover: null,
                companies: null,
                screenshots: null
            }
        }
        default:
            return state
    }
}

export default gameReducer