import { useState } from "react";
import toast from "react-hot-toast";
import { Api } from "../../Api/Api";
import { useParams } from "react-router-dom";

function WriteReview({setReviewUpdated}) {

    const [show, setShow] = useState(false);
        const {id} = useParams();
        const [rating,setRating] = useState(0)
        const [review, setReview] = useState('');

        // const handleChange = (e) => {
        //     const name = e.target.name;
        //     const value = e.target.value;
        //     setItems(values => ({ ...values, [name]: value })); 
        // }
        const [loading, setLoading] = useState(false)
        const handleSubmit = async (e) => {
            console.log("sdds",{ rating,review}) 
            e.preventDefault();
            try {
                if (review === '' ) {
                    toast.error("All fields are required");
                    return false;
                }
                if (rating === null || rating === undefined ) {
                    toast.error("All fields are required");
                    return false;
                }
                setLoading(true)
                const response = await Api.post('/review/submit-a-review', 
                    { rating:rating,
                        review:review,
                        product_id:id
                    });
                    toast.success(response?.data?.message);
                    setLoading(false)
                    setShow(!show);
                    setReviewUpdated(new Date());
            }
            catch (error) {
                console.log("error :", error);
                toast.error(error.response.data.message || "Something went wrong");
                setLoading(false);
            }
        };

        
  return (
    <>
        <button  onClick={()=>setShow(!show)}  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4" type="button">
        Write Review
        </button>

        <div className={`flex justify-center items-center h-full w-full fixed top-0 right-0 left-0 z-[9999999999] ${show ? "" : 'hidden'} `}>
            <div className="bg-black w-full h-full absolute top-0 left-0 opacity-[0.8] "></div>
                <div class="relative  w-full max-w-2xl max-h-full">
                    <div class="relative p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-700">

                    <button onClick={()=>setShow(!show)}
                        type="submit"
                        className="absolute w-[50px] h-[50px] top-2 text-3xl right-2"
                    >&times;</button>

                        {/* <h2 className="text-lg text-bold text-center">Write Something...</h2> */}
                        <h1 className='font-semibold tracking-widest text-2xl mt-4'>Add a Review</h1>
                    <p className='font-medium capitalize tracking-wider text-base text-gray-600 mt-2'>Your email address will not be published!!</p>
                    <div className="mt-6"  >
                        {/* <div className='grid md:grid-cols-1 gap-2 mb-4 mt-3'>
                            <div >
                                <label className="font-medium text-base block mb-2">Name *</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    defaultValue={items?.name} 
                                    placeholder="Enter Your Full Name"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-base block mb-2">Email *</label>
                                <input
                                    type="email"
                                    onChange={handleChange}
                                    defaultValue={items?.email}
                                    placeholder="Enter Your Email Address"
                                    className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                                />
                            </div>

                        </div> */}

                        <div class="flex gap-1 justify-center">
                            <button onClick={()=>setRating(1)}>
                                <svg class={`h-8 w-8 shrink-0 ${rating > 0 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                                    <path
                                        d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                    </path>
                                </svg>
                            </button>
                            <button onClick={()=>setRating(2)}>
                                <svg class={`h-8 w-8 shrink-0 ${rating  > 1 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                                    <path
                                        d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                    </path>
                                </svg>
                            </button>
                            <button onClick={()=>setRating(3)}>
                                <svg class={`h-8 w-8 shrink-0 ${rating > 2 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                                    <path
                                        d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                    </path>
                                </svg>
                            </button>
                            <button onClick={()=>setRating(4)}>
                                <svg class={`h-8 w-8 shrink-0 ${rating > 3 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                                    <path
                                        d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                    </path>
                                </svg>
                            </button>
                            <button onClick={()=>setRating(5)}>
                                <svg class={`h-8 w-8 shrink-0 ${rating > 4 ? "fill-amber-400" : "fill-gray-400"}`} viewBox="0 0 256 256">
                                    <path
                                        d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                    </path>
                                </svg>
                            </button>
                            
                        </div>

                        <div className='mb-3 mt-3'>
                            {/* <div > */}
                            <label className="font-medium text-base block mb-2">Your Review *</label>
                            <textarea
                                type="text"
                                placeholder="Type Your Review"
                                onChange={(e)=>{
                                    setReview(e?.target?.value);
                                }} 
                                className=" w-full h-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 py-3 px-4"
                            />
                            {/* </div> */}
                        </div>
                        <div className="flex justify-center">

                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="rounded-xl w-full md:w-32 border border-black bg-black text-white hover:bg-white hover:text-black font-medium py-3"
                        >
                            Submit
                        </button>
                        </div>
                    </div>
                            
                    </div>
                </div>
        </div>
        
    </>
  )
}

export default WriteReview;