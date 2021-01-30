import { PLAYER_DETAILS_FAIL, PLAYER_DETAILS_REQUEST, PLAYER_DETAILS_SUCCESS, PLAYER_LIST_FAIL, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS } from "../constants/playerConstants"
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

export const detailsPlayer = (playerID) => async (dispatch) => {

    dispatch ({ type: PLAYER_DETAILS_REQUEST, payload: playerID });

    try {
        const { data } = await Axios.get(`/api/players/${playerID}`);
        dispatch({ type: PLAYER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PLAYER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
