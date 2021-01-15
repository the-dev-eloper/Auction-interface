import { PLAYER_LIST_FAIL, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS } from "../constants/playerConstants";

export const playerListReducer = (
    state= { loading: true, players: []},
    action
) => {
    switch (action.type) {
        case PLAYER_LIST_REQUEST:
            return {loading: true};
        case PLAYER_LIST_SUCCESS:
            return { loading: false, players: action.payload }
        case PLAYER_LIST_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
};