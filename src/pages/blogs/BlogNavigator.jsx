import blogPrev from '../../Assets/blog-prev.jpg';
import blogNext from '../../Assets/blog-next.jpg';
import { Link } from 'react-router-dom';

function BlogNavigator() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3  '>
            <div className=''>
                <h6 className='tracking-[0.5em]  md:text-xl text-center  sm:text-left  pt-4 pb-4 '>PREV POST</h6>
                <div className=''>
                    <div className='flex'>
                        <Link to="#" className='max-w-[80px] h-auto'><img src={blogPrev} className='h-[90px] object-cover' /></Link>
                        <div className=''>
                            <div className='flex justify-top items-top gap-3 px-2 py-2 '>
                                <p className='pl-2 text-black '>
                                    12 July 2025
                                </p>
                                <p className=' text-center rounded-lg '>
                                    <span className='bg-red-200 hover:bg-red-500 capitalize p-2 rounded-[12px] text-center hover:text-white '>
                                        Interior
                                    </span>
                                </p>
                            </div>
                            <p className='pl-3 font-medium text-left '>Consectetur purus habitasse ut diam habitant varius.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h6 className='tracking-[0.5em]  md:text-xl text-center  sm:text-left  pt-4 pb-4  '>NEXT POST</h6>
                <div className='flex'>
                    <Link to="#" className='max-w-[80px] h-auto'><img src={blogNext} className='h-[90px] object-cover' /></Link>
                    <div className=''>
                        <div className='flex justify-top items-top gap-3 px-2 py-2 '>
                            <p className='pl-2 text-black '>
                                21 July 2025
                            </p>
                            <p className=' text-center rounded-lg '>
                                <span className='bg-red-200 hover:bg-red-500 capitalize p-2 rounded-[12px] text-center hover:text-white '>
                                    Vases
                                </span>
                            </p>
                        </div>
                        <p className='pl-3 font-medium text-left '>Consectetur purus habitasse ut diam habitant varius.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogNavigator;