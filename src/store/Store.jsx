import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './cartSlice'
import ProductReducer from './productSlice'
const Store= configureStore({
    reducer:{
        cart: cardReducer,
        product:ProductReducer

    }
})
export default Store