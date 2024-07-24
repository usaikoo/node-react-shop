import {
    ORDER_REQ,
    ORDER_RESET,
    ORDER_SUCCESS,
    ORDER_FAIL,


    ORDER_DETAIL_REQ,
    ORDER_DETAIL_REQ_FAIL,
    ORDER_DETAIL_REQ_SUCCESS,


    ORDER_PAYMENT_REQ,
    ORDER_PAYMENT_REQ_FAIL,
    ORDER_PAYMENT_REQ_SUCCESS,


    ORDER_LIST_REQ,
    ORDER_LIST_REQ_FAIL,
    ORDER_LIST_REQ_SUCCESS
} from "../Constants/Order"


//order create 

export const orderReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case ORDER_REQ:
            return { loading: true };
        case ORDER_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case ORDER_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_RESET:
            return {}
        default:
            return state;
        
    }
}


export const orderDetailReducer = (state = { loading: true, shippingAddress: {}, orderItems: [] }, action) => {
    switch (action.type) {
        case ORDER_DETAIL_REQ:
            return { loading: true };
        case ORDER_DETAIL_REQ_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case ORDER_DETAIL_REQ_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
}




export const orderPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAYMENT_REQ:
            return { loading: true };
        case ORDER_PAYMENT_REQ_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case ORDER_PAYMENT_REQ_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
}


export const orderListReducer = (state = {orders:[]}, action) => {
    switch (action.type) {
        case ORDER_LIST_REQ:
            return { loading: true };
        case ORDER_LIST_REQ_SUCCESS:
            return { loading: false, success: true, orders: action.payload };
        case ORDER_LIST_REQ_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
}