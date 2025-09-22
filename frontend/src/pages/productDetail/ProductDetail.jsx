import { useEffect, useState } from 'react';
import Navbar from '../../Components/navbar';
import ProductImg from './ProductImg';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Api } from '../../Api/Api';

function ProductDetail() {
  const{id} = useParams();
  console.log("id" ,id)
  const[product ,setproduct] = useState("")
  const ShowProductDetails = (id) => {
  Api.get(`/product/product-detail/${id}`)  
    .then((res) => {
      console.log("res", res);
      if (res.data.status) {
        toast.success(res.data.message);
        setproduct(res.data.productData)
        console.log("Product State : ",product);
      } else {
        toast.error(res.data.message);
      }
    })
    .catch((error) => {
      console.log("error", error);
      toast.error("Unable To Fetch Product Details. Try Again Later.");
    });
};


  useEffect(() => {
    if (id) {
      ShowProductDetails(id); 
    }
  }, [id]);

  return (
    <>
        <Navbar />
        <ProductImg product={product} />
    </>
  )
}

export default ProductDetail;