import "../styles/globals.css";
import { useState, useEffect } from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        setSubTotal(JSON.parse(localStorage.getItem("total")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let total = 0;
    let keys = Object.keys(myCart);
    for (let index = 0; index < keys.length; index++) {
      total += myCart[keys[index]].price * myCart[keys[index]].qty;
    }
    localStorage.setItem("total", JSON.stringify(total));
    setSubTotal(total);
  };

  const addToCart = (itemCode, name, size, variant, qty, price) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: qty, price, variant, itemCode, variant, name };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const removeFromCart = (itemCode, name, size, variant, qty, price) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  return (
    <div>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </div>
  );
}

export default MyApp;
