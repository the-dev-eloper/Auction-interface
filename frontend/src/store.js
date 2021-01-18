import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from 'redux-thunk'
import { playerDetailsReducer, playerListReducer } from "./reducers/playerReducers"

const initialState = {}
const reducer = combineReducers({
    playerList: playerListReducer,
    playerDetails: playerDetailsReducer 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store