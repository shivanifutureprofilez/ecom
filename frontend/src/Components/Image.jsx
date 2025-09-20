// Image.jsx
import React, { useEffect, useState } from 'react';

const Image = ({ alt, src, shop, classes }) => {
    const [imageSRC, setImageSRC] = useState();
    useEffect(()=>{
        if(typeof src === 'string'){
            setImageSRC(src);
        }
    },[src]);
    
    const imageLoader = () => {
        setImageSRC('/deafult.png');
    };

    return (
        <img
            //className='object-cover mb-3 w-[300px] h-[300px]'
            className={`${classes}`}
            src={imageSRC}
            alt={alt}
            loading="lazy"
            onError={imageLoader}
        />
    );
};

export default Image;
