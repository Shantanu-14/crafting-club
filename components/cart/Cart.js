import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const Cart = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  return (
    <div className="my-10 px-5 max-w-[1100px] mx-auto">
      <p className="text-center text-3xl font-semibold">Cart</p>
      <div className="cartItems my-5">
      {Object.keys(cart).map((item, index) => {
        return (
          <div className="item flex justify-between items-center" key={item}>
            <div>
              <span className="text-[17px]">{index+1}. </span>
              <span className="text-[17px]">{cart[item].name}</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  removeFromCart(
                    cart[item].itemCode,
                    cart[item].name,
                    cart[item].size,
                    cart[item].variant,
                    1,
                    cart[item].price
                  );
                }}
              >
                <BiMinus />
              </button>
              <span className="px-4 py-1 mx-2 border-[1px] rounded-md">
                {cart[item].qty}
              </span>
              <button
                onClick={() => {
                  addToCart(
                    cart[item].itemCode,
                    cart[item].name,
                    cart[item].size,
                    cart[item].variant,
                    1,
                    cart[item].price
                  );
                }}
              >
                <BiPlus />
              </button>
            </div>
          </div>
        );
      })}
      </div>
     <div className="flex my-10 items-center justify-between" >
     <div className="text-2xl">
            Sub Total : &#8377; {subTotal}
          </div>
      <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
        Proceed to Pay
      </button>
     </div>
    </div>
  );
};

export default Cart;
