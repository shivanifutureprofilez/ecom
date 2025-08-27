import React, { useState } from 'react'
import portfolio6 from '../../Assets/portfolio6.jpg'
import GalleryCard from "./GalleryCard"
import GallerySlider from "./GallerySlider"

function Gallery() {
    const [tags, setTags] = useState('all');

    const renderContent = () => {
        switch (tags) {
            case 'sofa':
                return <GalleryCard />;
            case 'interior':
                return <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3'>
                    <img src={portfolio6} alt="img1" className='w-full h-[400px]' />
                </div>;
            case 'lamp':
                return <GalleryCard />;

            case 'table':
                return <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3'>
                    <GallerySlider />
                </div>;
            case 'art':
                return <GalleryCard />;;
            default: // all
                return (
                    <>
                        <GalleryCard />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3'>
                            <img src={portfolio6} alt="img1" className='w-full h-[400px]' />
                            <GallerySlider />
                        </div>
                        <GalleryCard />
                    </>
                );
        }
    };



    return (
        <div className='mx-auto max-w-6xl mt-12 px-4'>
            <div className='flex justify-left'>
                <ul className='flex items-center flex-wrap gap-2 pb-8'>
                    <li className={`px-[8px] cursor-pointer ${tags === "all" ? "text-yellow-700" : "text-black"}`} onClick={() => setTags('all')}><span className=" pr-2 text-sm ">All</span><span className='pl-3 text-sm'>/</span></li>
                    <li className={`px-[8px] cursor-pointer ${tags === "sofa" ? "text-yellow-700" : "text-black"}`} onClick={() => setTags('sofa')}><span className=" pr-2 text-sm active:text-yellow-600">Sofa and Chair</span><span className='pl-2 text-sm'>/</span></li>
                    <li className={`px-[8px] cursor-pointer ${tags === "interior" ? "text-yellow-700" : "text-black"}`} onClick={() => setTags('interior')}><span className=" pr-2 text-sm">Full Interior</span><span className='pl-2 text-sm'>/</span></li>
                    <li className={`px-[8px] cursor-pointer ${tags === "lamp" ? "text-yellow-700" : "text-black"}`} onClick={() => setTags('lamp')}><span className=" pr-2 text-sm">Lamp and Vase</span><span className='pl-2 text-sm'>/</span></li>
                    <li className={`px-[8px] cursor-pointer ${tags === "table" ? "text-yellow-700" : "text-black"}`} onClick={() => setTags('table')}><span className=" pr-2 text-sm">Table</span><span className='pl-2 text-sm'>/</span></li>
                    <li className={`px-[8px] cursor-pointer ${tags === "art" ? "text-yellow-700" : "text-black"}`} onClick={() => setTags('art')}><span className=" pr-2 text-sm">Art Design</span></li>
                </ul>
            </div>

            <div className='grid'>
                {renderContent()}
            </div>
        </div>
    )
}

export default Gallery;
