/* eslint-disable @next/next/link-passhref */
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
import { BiPlus, BiMinus } from "react-icons/bi";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const handleClose = () => {
    setMobileMenu(false);
  };
  return (
    <div className="navbar flex justify-between items-center p-4 sticky top-0 bg-white z-50 shadow-md">
      <div
        className="flex justify-center items-center md:hidden"
        onClick={handleClick}
      >
        {!mobileMenu ? (
          <GiHamburgerMenu className="text-xl" />
        ) : (
          <AiOutlineClose className="text-xl" />
        )}
      </div>
      <div className="flex md:space-x-8 ">
        <Link href={"/"}>
          <div className="logo flex space-x-2 w-56 cursor-pointer">
            <img src="/cover.png" alt="logo" />
          </div>
        </Link>
      </div>
      <div
        className={
          mobileMenu
            ? "features md:space-x-6 absolute bg-white top-20 left-0 w-[100vw] text-center space-y-5 py-4 md:mx-4 md:flex md:static md:bg-white md:space-y-0 md:w-[fit-content] transition-all duration-200"
            : "features space-x-6 absolute bg-white top-20 left-[-100%] w-[100vw] text-center space-y-5 py-4 md:mx-4 md:flex md:static md:bg-white md:space-y-0 md:w-[fit-content] transition-all duration-200"
        }
      >
        <div onClick={handleClose}>
          <Link href={"/products/tshirts"} className="cursor-pointer  ">
            Tshirts
          </Link>
        </div>
        <div onClick={handleClose}>
          <Link href={"/products/hoodies"} className="cursor-pointer  ">
            Hoodies
          </Link>
        </div>
        <div onClick={handleClose}>
          <Link href={"/products/stickers"} className="cursor-pointer ">
            Stickers
          </Link>
        </div>
        <div onClick={handleClose}>
          <Link href={"/products/mugs"} className="cursor-pointer ">
            Mugs
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="account space-x-2">
          <button onClick={toggleSidebar}>
            <MdShoppingCart className="text-xl md:text-3xl" />
          </button>
        </div>
      </div>
      <div
        className={
          sidebar
            ? "sidebar fixed bg-gray-100 min-h-screen w-[100%] md:w-2/5 lg:w-3/7 xl:w-1/5 right-0 top-0 transition-all duration-200 shadow-lg px-4"
            : "sidebar fixed bg-white min-h-screen w-[100%] md:w-2/5 lg:w-3/7 xl:w-1/5 right-[-100%] top-0 transition-all duration-200"
        }
      >
        <div className="head flex justify-between items-center py-6 border-b-[0.5px] border-gray-300">
          <p className="text-xl ml-3 font-semibold text-gray-800">Cart</p>
          <div className="space-x-3">
            {Object.keys(cart).length > 0 && (
              <button onClick={clearCart} title="Clear Cart">
                <AiFillDelete className="text-3xl" />
              </button>
            )}
            <button onClick={toggleSidebar} title="Close Cart">
              <AiOutlineClose className="text-3xl" />
            </button>
          </div>
        </div>
        <div className="contentList mx-3 space-y-6 mt-6">
          {Object.keys(cart).length == 0 && (
            <div className="text-center text-gray-600">
              No Items in the Cart
            </div>
          )}
          {Object.keys(cart).map((item) => {
            return (
              <div
                className="item flex justify-between items-center"
                key={item}
              >
                <div>
                  <span className="text-[17px]">1. </span>
                  <span className="text-[17px]">{cart[item].name}</span>
                </div>
                <div className="flex items-center">
                  <button onClick={()=>{removeFromCart(cart[item].itemCode,cart[item].name,cart[item].size,cart[item].variant,1,cart[item].price)}} >
                    <BiMinus />
                  </button>
                  <span className="px-4 py-1 mx-2 border-[1px] rounded-md">
                    {cart[item].qty}
                  </span>
                  <button  onClick={()=>{addToCart(cart[item].itemCode,cart[item].name,cart[item].size,cart[item].variant,1,cart[item].price)}} >
                    <BiPlus />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {Object.keys(cart).length > 0 && (
          <div className=" mx-3 mt-6 text-2xl">
            Sub Total : &#8377; {subTotal}
          </div>
        )}
        <div>
          {Object.keys(cart).length > 0 && (
            <Link href={'/order/checkout'} >
            <button 
            onClick={toggleSidebar}
            className="flex mx-auto mt-6 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
              Proceed to Buy
            </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
