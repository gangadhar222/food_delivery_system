import {ADD_TO_CART,REMOVE_FROM_CART} from './actionTypes.js'


export const addItem = payload =>({
    type: ADD_TO_CART,
    payload
})

export const removeItem = payload =>({
    type: REMOVE_FROM_CART,
    payload
})

