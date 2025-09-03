import React from 'react'
import ProductItem from '../../Components/ProductItem';
import newArrival1 from '../../Assets/newArrival1.jpg';
import newArrival2 from '../../Assets/newArrival2.jpg';
import newArrival3 from '../../Assets/newArrival3.jpg';
import newArrival4 from '../../Assets/newArrival4.jpg';
import shop5 from '../../Assets/shop5.jpg'
import shop6 from '../../Assets/Blog3.jpg'

function Wishlist({user}) {
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
        {
          img: shop5,
          price: "$122.75",
          name: "Luxury Lamp for Wall",
        },
        {
          img: shop6,
          price: "$122.75",
          name: "Luxury Lamp for Wall",
        }
    ]
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products?.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
    </div>
  )
}

export default Wishlist;