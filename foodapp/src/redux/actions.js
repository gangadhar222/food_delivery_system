import { ADD_TO_CART, REMOVE_FROM_CART,LOG_IN,SIGN_UP } from './actionTypes.js'


export const addItem = payload => ({
    type: ADD_TO_CART,
    payload
})

export const removeItem = payload => ({
    type: REMOVE_FROM_CART,
    payload
})

export const login = payload => ({
    type: LOG_IN,
    payload
})

export const signUp = payload => ({
    type: SIGN_UP,
    payload
})




