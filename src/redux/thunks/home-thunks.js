import { gamesAPI } from '../../api/api'
import { homeActions } from '../actions/home-actions'

export const requestGames = (query, maxResults = 10) => async dispatch => {
  let data
  if (!query) {
    data = await gamesAPI.getPopularGames(maxResults)
  } else {
    data = await gamesAPI.getGamesByQuery(query, maxResults)
  }

  dispatch(homeActions.setGames(data))
}
