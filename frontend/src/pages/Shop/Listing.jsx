import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import ProductItem from '../../Components/ProductItem';

function Listing({ category, select, isAdmin }) {
  console.log("select", select)
  const [products, setProducts] = useState([]);
  const GetProducts = () => {
    Api.get('/product/get-product')
      .then((res) => {
        if (res.data.status) {
          let productdata = [];
          if (category === "all") {
            productdata = res.data.products;
          } else {
              const filteredProducts = res.data.products.filter(
              (item) => item.product_type?.toLowerCase() === category?.toLowerCase()
            );
            if (select === "low") {
              productdata = [...filteredProducts].sort((a, b) => a.price - b.price);
            } else if (select === "high") {
              productdata = [...filteredProducts].sort((a, b) => b.price - a.price);
            // } else if (select === "popular") {
              //productdata = [...filteredProducts].sort((a, b) => b.price - a.price);
            } else {
              productdata = filteredProducts;
            }
          }
          setProducts(productdata);
          console.log("productdata", productdata);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    GetProducts(category, select)
  }, [category, select]);

  return (
    <div className="">
      <hr className="mb-8" />

      {products?.length ? <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products && products?.map((product) => {
            return <ProductItem  isAdmin={isAdmin} product={product} />
          })}
        </div>
      </div> :
        <div className='w-full p-6 text-center bg-gray-100 text-lg'>No Result found !!</div>}
    </div>
  )
}

export default Listing;