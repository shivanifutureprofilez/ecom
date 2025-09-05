import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import ProductItem from '../../Components/ProductItem';

function Listing({ category }) {
  console.log("category", category)
  const [products, setProducts] = useState([]);
  const GetProducts = () => {
    const fetch = Api.get('/product/get-product');
    fetch.then((res) => {
      if (res.data.status) {
        if (category === "all") {
          setProducts(res.data.products);
        } else {
          const filteredProducts = res.data.products.filter(
            (item) => item.product_type === category?.toLowerCase()
          );
          setProducts(filteredProducts);
        }
      } else {
        setProducts([]);
      }
    }).catch((err) => {
      console.log('err', err)
    })
  }
  useEffect(() => {
    GetProducts(category)
  }, [category]);

  return (
    <div className="">
      <hr className="mb-8" />
      {products?.length ? <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products?.map((product) => {
            return <ProductItem product={product} />
          })}
        </div>
        
      </div> :
        <div className='w-full p-6 text-center bg-gray-100 text-lg'>No Result found !!</div>}
    </div>
  )
}

export default Listing;