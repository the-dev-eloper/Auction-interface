import { PLAYER_LIST_FAIL, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS } from "../constants/playerConstants"
import Axios from 'axios'

export const listPlayers = () => async (dispatch) => {

    dispatch ({
        type: PLAYER_LIST_REQUEST
    });

    try {
        const { data } = await Axios.get('/api/players')
        dispatch({ type: PLAYER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch ({ type: PLAYER_LIST_FAIL, payload: error.message})
    }
}