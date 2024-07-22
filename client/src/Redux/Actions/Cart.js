import axios from "axios";
import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
  
    CART_SAVE_SHIPPING_ADDRESS,
    SAVE_PAYMENT_METHOD
} from "../Constants/Cart"

import { BASE_URL } from "../Constants/BASE_URL";


export const addToCartAction = (id, qty) => async (dispatch, getState) => {
    try { 
        const { data } = await axios.get(`${BASE_URL}/api/products/${id}`)
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })

        const cartItems = getState().cartReducer.cartItems;
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        
    } catch (error) {
        console.log(error)
    }
}

export const removeFromCartAction = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload:id
    })

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems) )
}


export const saveShippingAddressAction = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload:data
    })

    localStorage.setItem("shippingAddress", JSON.stringify(data))
}



export const savePaymentMethodAction = (data) => (dispatch) => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: data
    })

    localStorage.setItem("paymentMethod", JSON.stringify(data))
}