import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const productSlice= createSlice({
    name:'product',
    initialState:{
        data:[]
    },
    reducers:{
        setProduct(state,action){
       state.data= action.payload;
        }
    }
})
export  const {setProduct} = productSlice.actions;
export default productSlice.reducer;


export function getproduct(){
   return async function item(dispatch,getState){
    try{
        const res= await axios.get('https://fakestoreapi.com/products')
        dispatch(setProduct(res.data))
        console.log(res,'data get')
    }catch(err){
  console.log(err)
    }
  
   }
}