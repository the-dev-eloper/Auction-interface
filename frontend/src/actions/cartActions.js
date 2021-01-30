import Axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (playerId, sellPrice) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/players/${playerId}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            baseprice: data.price,
            player: data._id,
            sellPrice,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (playerId) => async (dispatch, getState) => {

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: playerId
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};