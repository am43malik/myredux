import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios'
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getproduct } from "../store/productSlice";
const Produts = () => {
    const dispatch= useDispatch()
    const {data:products }= useSelector((state)=>state.product)
  // const [products,setProducts]=useState();
  useEffect(()=>{
  //  const item = async()=>{
  //    const data= await axios.get('https://fakestoreapi.com/products')
  //    setProducts(data.data)
  //   //  console.log(data.data)
    
  //   }
  //   item()
  dispatch(getproduct())
  
},[])

const handelAdd=(item)=>{
   dispatch(add(item))
//    alert('sfs')
}


  return   <div>   
{
   products?.map((item)=>{ 
    return(
<div className="produc" key={item.id}>
    <div className="pto-info">
    <img  className="img"  src={item.image} alt="" />
                <h5 >{item.title}</h5>
                <h6>{item.price}</h6>
                <button onClick={()=>handelAdd(item)}>Add to Cart</button>
    </div>

            </div>   
    )     
                 
    })

}
  
   
  </div>;
};

export default Produts;
