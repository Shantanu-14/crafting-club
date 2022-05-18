/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BACKEND_SERVER } from "../../BACKEND_SERVER";
import { BsHeartFill } from "react-icons/bs";
import { BiPlus, BiMinus } from "react-icons/bi"
const Post = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [servicable, setServicable] = useState(null);
  const [qty, setQty] = useState(1);
  const [pin, setPin] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  const checkService = async () => {
    const pins = await axios.get(`${BACKEND_SERVER}/pincode`);
    if (pins.data.includes(parseInt(pin))) {
      setServicable(true);
    } else {
      setServicable(false);
    }
  };

  const handleQty = (action) => {
    action === "add" ? setQty(qty + 1) : setQty(qty - 1);
  };

  let rating = [];
  for (let index = 0; index < 4; index++) {
    rating.push(
      <svg
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 text-pink-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    );
  }
  rating.push(
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-4 h-4 text-pink-500"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  );

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {rating.map((item) => {
                    // eslint-disable-next-line react/jsx-key
                    return <div>{item}</div>;
                  })}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[100%] justify-between items-center pt-3 pb-7 border-b-2 border-gray-100 mb-5 ">
                <p className=" text-center title-font font-medium text-3xl text-gray-900">
                  &#8377;58.00
                </p>
                <div className="flex mt-5 md:mt-0 space-x-7  ">
                  <div className="flex space-x-5">
                    <div className="flex items-center">
                      <button
                        disabled={qty===1?true:false}
                        onClick={() => {
                          handleQty("minus")
                        }}
                      >
                        <BiMinus className="text-xl hover:text-pink-500  " />
                      </button>
                      <span className="px-4 py-1 mx-2 border-[1px] rounded-md text-xl">
                        {qty}
                      </span>
                      <button
                        onClick={() => {
                         handleQty("add")
                        }}
                      >
                        <BiPlus className="text-xl hover:text-pink-500 " />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[100%] justify-between items-center pt-3 pb-7 border-b-2 border-gray-100 mb-5 ">
                <div className="flex mt-5 md:mt-0 space-x-7  ">
                  <div className="flex space-x-5">
                    <button className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                      Buy Now
                    </button>
                    <button
                      onClick={() => {
                        addToCart("blah", "Tshirt", "S", "Red", qty, 499);
                      }}
                      className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <BsHeartFill />
                  </button>
                </div>
              </div>
              <div>
                <div className="flex space-x-5">
                  <input
                    type="text"
                    className="border-2 rounded-md text-lg px-2 py-1"
                    placeholder="Pincode"
                    value={pin}
                    onChange={(e) => {
                      setPin(e.target.value);
                    }}
                  />
                  <button
                    onClick={checkService}
                    className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                  >
                    Check Availability
                  </button>
                </div>
                <div className="flex space-x-5">
                  {servicable && servicable !== null && (
                    <div className="mt-3 text-blue-500">
                      Yes! The item is Deliverable.
                    </div>
                  )}
                  {!servicable && servicable !== null && (
                    <div className="mt-3 text-blue-500">
                      Sorry! Delivery is not Availabile.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
