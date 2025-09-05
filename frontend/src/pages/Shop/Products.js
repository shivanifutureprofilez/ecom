import React from 'react'
import { Api } from '../../Api/Api';

function Listing() {
  const [products, setProducts] = useState([]);
  const GetProducts = () => {
    const fetch = Api.get('/get');
    fetch.then((res) => {
      if (res.data.status) {
        setProducts(res.data.products)
      } else {
        setProducts(null)
        toast.error("No Products To Show")
      }
    }).catch((err) => {
      console.log('err', err)
      navigate('/home');
      toast.error("No Products To Show. Something went wrong")
    })
  }
  return (
    <div className="max-w-[940px] mx-auto p-5 md:p-0">
        <hr className="mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* {products?.map((product) => (
            getP.
          ))} */}
        </div>
        <div className="flex justify-center items-center">
          <button className='border py-[7px] rounded-lg mt-14 mb-8 hover:bg-black hover:text-white'>
            <span className="pl-2 pr-2">Load More</span>
          </button>
        </div>
      </div>
  )
}

export default Listing;