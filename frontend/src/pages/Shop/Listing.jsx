import React, { useEffect, useState } from 'react'
import { Api } from '../../Api/Api';
import ProductItem from '../../Components/ProductItem';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

function Listing({ wishlist, category, select, isAdmin }) {

  const params = new URLSearchParams(window.location.search);
  const selected_category = params.get("selected_category");
  const [cats, setCats] = useState(selected_category || category || '' )

  useEffect(()=>{
    setCats(category);
  },[category]);


  const [products, setProducts] = useState([]);
  const GetProducts = () => {
    Api.get(`/product/get-product?category=${cats}`)
      .then((res) => {
        if (res.data.status) {
          let productdata = [];
          if (cats === "all") {
            productdata = res.data.products;
          } else {
              const filteredProducts = res.data.products.filter(
              (item) => item.product_type?.toLowerCase() === cats&& cats?.toLowerCase()
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
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    GetProducts(cats, select)
  }, [cats, select]);

  return (
    <div className="">
      <hr className="mb-8" />

      {products?.length ? <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products && products?.map((product) => (
            <ProductItem  isAdmin={isAdmin} product={product}  GetProducts={GetProducts}/>
          )
          )}
        </div>
      </div> :
        <div className='w-full p-6 text-center bg-gray-100 text-lg'>No Result found !!</div>}
    </div>
  )
}

export default Listing;