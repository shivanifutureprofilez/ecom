// Image.jsx
import React, { useState } from 'react';

const Image = ({ alt, src, shop, classes }) => {
    const [imageSRC, setImageSRC] = useState(
        typeof src === 'string' ? src : src
    );

    const imageLoader = () => {
        setImageSRC('/deafult.png');
    };

    console.log("")
    console.log("imageSRC", imageSRC)
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
