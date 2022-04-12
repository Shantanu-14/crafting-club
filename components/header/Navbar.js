import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };
  const handleClose = () => {
    setMobileMenu(false);
  };
  return (
    <div className="navbar flex justify-between items-center p-4 ">
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
            ? "features space-x-6 absolute bg-white top-20 left-0 w-[100vw] text-center space-y-5 py-4 md:mx-4 md:flex md:static md:bg-white md:space-y-0 md:w-[fit-content] transition-all duration-200"
            : "features space-x-6 absolute bg-white top-20 left-[-100%] w-[100vw] text-center space-y-5 py-4 md:mx-4 md:flex md:static md:bg-white md:space-y-0 md:w-[fit-content] transition-all duration-200"
        }
      >
        {/* <div className="border-b-[0.5px] border-gray-400 w-[91%] md:hidden" ></div> */}
        <Link
          href={"/tshirts"}
          className="cursor-pointer"
          onClick={handleClose}
        >
          Tshirts
        </Link>
        <div className="border-b-[0.5px] border-gray-300 w-[91%] md:hidden"></div>
        <Link
          href={"/hoodies"}
          className="cursor-pointer"
          onClick={handleClose}
        >
          Hoodies
        </Link>
        <div className="border-b-[0.5px] border-gray-300 w-[91%] md:hidden"></div>
        <Link
          href={"/stickers"}
          className="cursor-pointer"
          onClick={handleClose}
        >
          Stickers
        </Link>
        <div className="border-b-[0.5px] border-gray-300 w-[91%] md:hidden"></div>
        <Link href={"/mugs"} className="cursor-pointer" onClick={handleClose}>
          Mugs
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        {/* <div className="search hidden md:block m-1">
                    <input type="text" placeholder="Search" className="bg-gray-100 p-1 pl-3 rounded-full"/>
                </div> */}
        <div className="account space-x-2">
          {/* <i className="fa-solid fa-cart-shopping fa-lg  cursor-pointer "></i>
                    <i className="fa-regular fa-user fa-lg  cursor-pointer "></i> */}
          <button>
            <MdShoppingCart className="text-xl md:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
