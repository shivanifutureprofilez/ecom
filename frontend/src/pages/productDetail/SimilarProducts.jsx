import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Api } from '../../Api/Api';
import { useParams } from 'react-router-dom';
import ProductItem from '../../Components/ProductItem';

function SimilarProducts() {

  const {id} = useParams();
  const[products ,setProducts] = useState("");

  const GetProducts = () => {
      Api.get(`/product/get-product?similar_product_id=${id}`)
        .then((res) => {
          if (res.data.status) {
            setProducts(res.data.products);
          } else {
            setProducts([]);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    };


  useEffect(() => {
    if (id) {
      GetProducts(); 
    }
  }, [id]);
  
  return (
    <div className='container mx-auto'>
        <h1 className='font-bold capitalize mb-2  tracking-widest text-3xl'>Similar Products</h1>
        <p className='text-gray-700 mb-4 pb-[20px] text-lg'>Similar products you might be intrested in.</p>

        {products?.length ? <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {products && products?.map((product) => (
            <ProductItem  product={product}  />
          )
          )}
        </div>
      </div> :
        <div className='w-full p-6 text-center bg-gray-100 text-lg'>No Result found !!</div>}
    </div>
    
  )
}

export default SimilarProducts;