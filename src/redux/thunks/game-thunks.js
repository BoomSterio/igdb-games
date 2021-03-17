import {gamesAPI} from '../../api/api'
import {gameActions} from '../actions/game-actions'

export const requestGameInfo = (id) => async (dispatch) => {
    dispatch(gameActions.clearInfo())

    let cover = await gamesAPI.getGameCover(id)
    dispatch(gameActions.setCover(cover))
    let info = await gamesAPI.getGameInfo(id)
    dispatch(gameActions.setInfo(info))
    let companies = await gamesAPI.getCompanies(id)
    dispatch(gameActions.setCompanies(companies))
    let screenshots = await gamesAPI.getScreenshots(id)
    dispatch(gameActions.setScreenshots(screenshots))
}