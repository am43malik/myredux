import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { remove } from "../store/cartSlice";
import '../App.css';
const Cart = () => {
    const items= useSelector((state)=>state.cart)
    const dispatch= useDispatch()
    const handelRemove=(itemid)=>{
      dispatch(remove(itemid))
    }
  return (
    <div>


{
    items.map((item)=>{
        return(
            <div key={item.id}>
                <img className="img"  src={item.image} alt="" />
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <button onClick={()=>handelRemove(item.id)} >Remove</button>


            </div>
        )
    })
}


    </div>
  )
}

export default Cart