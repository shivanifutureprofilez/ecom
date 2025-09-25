import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Api } from '../../Api/Api';

function DisplayReviews({ product, reviewUpdated }) {
  const { id } = useParams();
  console.log("product id", product)
  const [reviews, setReviews] = useState([]);
  const getReviews = (id) => {
    Api.get(`/review/showReviews/${id}`)
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.message);
          setReviews(res.data.reviews);
          console.log("reviews state data : ", reviews);
        }
        else {
          toast.error(res.data.message);
          setReviews([]);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Unable To Fetch This Product Reviews. Something Went Wrong!!!");
        setReviews([]);
      })
  }

  useEffect(() => {
    if (id) {
      getReviews(id);
    }
  }, [id, reviewUpdated]);


  return (
    <div className='container mx-auto'>
      {reviews.map((review) => (
        <div key={review._id} className="flex gap-4 mb-6 border-b pb-4">
          <img src={product?.image} alt="" className="object-cover w-16 h-16 rounded"/>
          <div> 
            <h2 className="capitalize font-semibold">{review.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
            <div className="flex gap-1 my-1">
              <svg class={`h-4 w-4 shrink-0 ${review.rating > 0 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                <path
                  d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                </path>
              </svg>
              <svg class={`h-4 w-4 shrink-0 ${review.rating > 1 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                <path
                  d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                </path>
              </svg>
              <svg class={`h-4 w-4 shrink-0 ${review.rating > 2 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                <path
                  d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                </path>
              </svg>
              <svg class={`h-4 w-4 shrink-0 ${review.rating > 3 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                <path
                  d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                </path>
              </svg>
              <svg class={`h-4 w-4 shrink-0 ${review.rating > 4 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                <path
                  d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                </path>
              </svg>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        </div>
      ))}

      
    </div>
  )
}

export default DisplayReviews;