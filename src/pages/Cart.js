import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <section>
      <h1>This is cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {cart
          .sort((a, b) => a._id - b._id)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default Cart;
