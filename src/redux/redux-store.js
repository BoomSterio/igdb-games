import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import homeReducer from './reducers/home-reducer'
import gameReducer from './reducers/game-reducer'

let rootReducer = combineReducers({
  homePage: homeReducer,
  gamePage: gameReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
window.store = store

export default store
