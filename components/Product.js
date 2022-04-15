/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";

const Product = ({ image, category, name, price, sizes, slug }) => {
  return (
    <Link href={`/product/${slug}`}>
      <div className="lg:w-[22%] md:w-[30%] p-4 w-full shadow-md cursor-pointer my-4 hover:shadow-xl transition-all duration-200">
        <a className="block relative h-80 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {name}
          </h2>
          <p className="mt-1">&#8377; {price}</p>
          <p className="mt-1">{sizes}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
