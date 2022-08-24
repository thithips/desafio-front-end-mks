import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_TO_CART } from "./constant";

export const addToCart = (product:object) => {
    return {
        type: ADD_TO_CART,
        data: product
    }
}

export const removeFromCart = (product:object) => {
    return {
        type: REMOVE_TO_CART,
        data: product
    }
}
export const incrementItem = (product:object) => {
    return {
        type: INCREMENT,
        data: product
    }
}
export const decrementItem = (product:object) => {
    return {
        type: DECREMENT,
        data: product
    }
}
