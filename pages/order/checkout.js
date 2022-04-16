import React from 'react'
import Cart from '../../components/cart/Cart'
import DeliveryForm from '../../components/forms/DeliveryForm'

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div>
      <DeliveryForm/>
      <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    </div>
  )
}

export default Checkout