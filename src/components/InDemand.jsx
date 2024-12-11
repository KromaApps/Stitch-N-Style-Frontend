import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const InDemand = () => {
  const { products } = useContext(ShopContext);
  const [inDemand, setInDemand] = useState([]);

  useEffect(() => {
    const inDemandProduct = products.filter((item) => item.inDemand);
    setInDemand(inDemandProduct.slice(0, 5));
  }, [products]);

  return (
    <section className="pt-16 pb-1 px-4 mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <Title text1="IN-DEMAND " text2="STYLES" />
        <p className="max-w-2xl mx-auto text-sm text-gray-600">
          Crafted for style, chosen by Many
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {inDemand.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default InDemand;
