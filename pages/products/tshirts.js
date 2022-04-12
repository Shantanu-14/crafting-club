import React from "react";
import Product from "../../components/Product";

const Tshirts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto flex flex-wrap w-[100vw] justify-around md:justify-between -m-4">
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg"
          />
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg"
          />
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg"
          />
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg"
          />
          <Product
            name="Somename"
            category="Casusal"
            price="69"
            sizes={["S", "M", "L", "XL"]}
            image="https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default Tshirts;
