import React from "react";
import Product from "../../components/Product";

const Hoodies = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto flex flex-wrap w-[100vw] justify-around md:justify-between -m-4">
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://5.imimg.com/data5/SELLER/Default/2020/8/NO/PH/VM/36740565/hoodie-printing-with-hoodies-500x500.jpeg"
          />
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://5.imimg.com/data5/SELLER/Default/2020/8/NO/PH/VM/36740565/hoodie-printing-with-hoodies-500x500.jpeg"
          />
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://5.imimg.com/data5/SELLER/Default/2020/8/NO/PH/VM/36740565/hoodie-printing-with-hoodies-500x500.jpeg"
          />
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://5.imimg.com/data5/SELLER/Default/2020/8/NO/PH/VM/36740565/hoodie-printing-with-hoodies-500x500.jpeg"
          />
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://5.imimg.com/data5/SELLER/Default/2020/8/NO/PH/VM/36740565/hoodie-printing-with-hoodies-500x500.jpeg"
          />
        </div>
      </section>
    </div>
  );
};

export default Hoodies;
