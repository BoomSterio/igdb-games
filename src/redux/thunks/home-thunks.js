import { gamesAPI } from '../../api/api'
import { homeActions } from '../actions/home-actions'

export const requestGames = (query = null, maxResults = 10) => async dispatch => {
  dispatch(homeActions.setIsFetching(true))

  let data
  if (!query) {
    data = await gamesAPI.getPopularGames(maxResults)
  } else {
    data = await gamesAPI.getGamesByQuery(query, maxResults)
  }

  dispatch(homeActions.setGames(data))
  dispatch(homeActions.setIsFetching(false))
}
