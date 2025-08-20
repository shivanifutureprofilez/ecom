import React from "react";
import newArrival1 from '../../Assets/newArrival1.jpg';
import newArrival2 from '../../Assets/newArrival2.jpg';
import newArrival3 from '../../Assets/newArrival3.jpg';
import newArrival4 from '../../Assets/newArrival4.jpg';

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
    <section className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 pt-9">{title}</h2>
        <a href="/collection" className="text-gray-700 font-medium hover:text-yellow-700 flex items-center gap-2">
          See All Collection <span>&rarr;</span>
        </a>
      </div>
      <hr className="mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.name}>
            <img src={product.img} alt={product.name} className="rounded-lg w-full h-64 object-cover mb-4 shadow" />
            <div className="text-gray-800 font-semibold">{product.price}</div>
            <div className="text-gray-700">{product.name}</div>
          </div>
        ))}
      </div>
      <br /><br />
    </section>
  );
}

export default NewArrival;