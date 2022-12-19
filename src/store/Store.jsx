import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './cartSlice'
import ProductReducer from './productSlice'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'


const persistConfig={
     key:'root',
    storage,
}

const reducer=combineReducers({
    cart: cardReducer,
    product:ProductReducer

})

const persistedReducer = persistReducer(persistConfig, reducer);


const Store= configureStore({
    reducer:persistedReducer
})
export default Store