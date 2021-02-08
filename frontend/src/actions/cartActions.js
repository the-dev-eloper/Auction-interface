import Axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from '../constants/cartConstants';

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

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
}