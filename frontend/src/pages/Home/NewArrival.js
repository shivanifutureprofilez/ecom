import React from "react";
import newArrival1 from '../../Assets/newArrival1.jpg';
import newArrival2 from '../../Assets/newArrival2.jpg';
import newArrival3 from '../../Assets/newArrival3.jpg';
import newArrival4 from '../../Assets/newArrival4.jpg';
import ProductItem from "../../Components/ProductItem";

function NewArrival({ title = "New Arrival" }) {
  const products = [
    {
      img: newArrival1,
      price: "$25.75",
      name: "White Minimal Chair",
    },
    {
      img: newArrival2,
      price: "$122.75",
      name: "Preminu Luxury Sofa",
    },
    {
      img: newArrival3,
      price: "$140.99",
      name: "Table With Pops",
    },
    {
      img: newArrival4,
      price: "$122.75",
      name: "Luxury Lamp for Wall",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto md:mt-0  px-4 ">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold leading-none text-gray-800 pt-9 ">{title}</h2>
        <a href="/collection" className="text-gray-700 pt-[40px] md:pt-[50px] font-medium hover:text-yellow-700 ">
          See All Collection <span>&rarr;</span>
        </a>
      </div>
      <hr className="mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
      <br /><br />
    </section>
  );
}

export default NewArrival;