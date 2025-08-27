import React from 'react'
import portfolio1 from '../../Assets/portfolio1.jpg';
import portfolio2 from '../../Assets/portfolio2.jpg';
import portfolio3 from '../../Assets/portfolio3.jpg';
export default function GalleryCard() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-3  '>
            <img src={portfolio1} alt="img1" className='w-full h-[400px] object-cover' />
            <img src={portfolio2} alt="img1" className='w-full h-[400px] object-cover' />
            <img src={portfolio3} alt="img1" className='w-full h-[400px] object-cover' />
        </div>
    )
}
