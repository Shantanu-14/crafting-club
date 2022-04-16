import React from "react";

const DeliveryForm = () => {
  return (
    <div className="my-10 px-5 max-w-[1100px] mx-auto">
      <p className="text-center text-3xl font-semibold">Delivery Details</p>
      <div className="row flex flex-wrap justify-between my-4">
        <div className="relative mb-4 w-[100%] md:w-[47%] ">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            First Name
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4 w-[100%] md:w-[47%] ">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Last Name
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="row flex flex-wrap justify-between my-4">
        <div className="relative mb-4 w-[100%] md:w-[47%] ">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4 w-[100%] md:w-[47%] ">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Phone Number
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <div className="row flex flex-wrap justify-between my-4">
        <div className="relative mb-4 w-[100%] md:w-[47%] ">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            City
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4 w-[100%] md:w-[47%] ">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            State
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="row flex flex-wrap justify-between my-4">
        <div className="relative mb-4 w-[100%] md:w-[47%] ">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      
    </div>
  );
};

export default DeliveryForm;
