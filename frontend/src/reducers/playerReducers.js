import { PLAYER_DETAILS_FAIL, PLAYER_DETAILS_REQUEST, PLAYER_DETAILS_SUCCESS, PLAYER_LIST_FAIL, PLAYER_LIST_REQUEST, PLAYER_LIST_SUCCESS } from "../constants/playerConstants";

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

export const playerDetailsReducer = (
    state = { loading: true, player: {} },
    action
) => {
    switch(action.type) {
        case PLAYER_DETAILS_REQUEST:
            return { loading: true };
        case PLAYER_DETAILS_SUCCESS:
            return { loading: false, player: action.payload };
        case PLAYER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
};
