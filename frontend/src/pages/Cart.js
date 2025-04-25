import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { deleteFromCart,updateQuantity } from '../store/cartslice/Cartslice';
import './Cart.css'

const Cart = () => {
    const CartProducts = useSelector((state)=> state.cart.cartItems);
    const dispatch= useDispatch();
    const deleteCart = (item) =>{
        dispatch(deleteFromCart(item));
    }
    const incrementCart = (id,quantity)=>{
        dispatch(updateQuantity({id,quantity:quantity+1}))
    }
    const decrementCart = (id,quantity)=>{
        if(quantity>1){
            dispatch(updateQuantity({id,quantity:quantity-1}))
        }
    }
  return (
    <div>
      <div className='details'>
                {CartProducts.map((item) => (
                    <div className='card mb-5' key={item.id}>
                        <div className='details1'>
                            <img src={item.img} alt='' />
                            <div className='card-body'>
                                <div className='card-title'>{item.des}</div>
                                <div className='card-title'>{item.title}</div>
                                <div className='card-price'>{item.price}</div>
                                <button className='button' onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button>
                                {item.quantity}
                                <button className='button' onClick={()=>{incrementCart(item.id,item.quantity)}}>+</button>
                                <button className='button'onClick={() => { deleteCart(item) }}>Delete</button>
                                
                            </div>
                
           
            </div>
        </div>
         ))}
         </div>
    </div>
  )
}

export default Cart
