import React from 'react'
import Navbar from '../../Components/navbar'

import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer';


export default function BlogDetails() {
    const { label } = useParams();
    console.log(label)
    const blogdata = {
        "date": "19 June, 2025",
        "category": "Interior",
        "title": "The Importance of Choosing the Right Furniture",
        "author": {
            "name": "Jon Doue",
            "image": "https://furnixar.vercel.app/assets/tmnl-02-BwH4vLAt.jpg"
        },
        "featured_image": "https://furnixar.vercel.app/assets/blog-details-D8USqq_I.jpg",
        "content": [
            {
                "type": "paragraph",
                "text": "In the realm of home decor, where style meets functionality, Furnixar stands as a beacon of innovation and elegance..."
            },
            {
                "type": "heading",
                "level": 3,
                "text": "Main features of our product"
            },
            {
                "type": "list",
                "style": "unordered",
                "items": [
                    "All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                    "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                    "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate."
                ]
            },
            {
                "type": "paragraph",
                "text": "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight..."
            },
            {
                "type": "blockquote",
                "text": "Nibh purus integer elementum in tellus vulputate habitasse of this is vulputate posuere habitant vel tempor varius."
            },
            {
                "type": "heading",
                "level": 4,
                "text": "Main features of our product"
            },
            {
                "type": "paragraph",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
            },
            {
                "type": "list",
                "style": "ordered",
                "items": [
                    "All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                    "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                    "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate."
                ]
            },
            {
                "type": "paragraph",
                "text": "All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet..."
            }
        ],
        "tags": ["Chair", "Art & Paint", "Mirror", "Table", "Lam"],
        "share_links": {
            "facebook": "/blog-details-v1",
            "twitter": "/blog-details-v1",
            "instagram": "/blog-details-v1"
        },
        "navigation": {
            "previous_post": {
                "title": "Consectetur purus habitasse ut diam habitant varius.",
                "date": "19th June 2025",
                "category": "Interior",
                "image": "https://furnixar.vercel.app/assets/post-01-CH5c4FsY.jpg",
                "link": "/blog-details-v1"
            },
            "next_post": {
                "title": "Far far away of furniture of this habitant vel tempor.",
                "date": "20th June 2025",
                "category": "Vases",
                "image": "https://furnixar.vercel.app/assets/post-02-C0DuL8HC.jpg",
                "link": "/blog-details-v1"
            }
        },
        "comments": [
            {
                "author": "Michele Obama",
                "image": "https://furnixar.vercel.app/assets/tmnl-01-CLUzs6SC.jpg",
                "text": "Adipiscing lobortis interdum fringilla odio vitae nam pulvinar elementum. Nibh purus this integer. Auctor sit tempor varius."
            },
            {
                "author": "John Smith Doe",
                "image": "https://furnixar.vercel.app/assets/tmnl-02-BwH4vLAt.jpg",
                "text": "Adipiscing lobortis interdum fringilla odio vitae nam pulvinar elementum. Nibh purus this integer. Auctor sit tempor varius."
            },
            {
                "author": "Max Franklline",
                "image": "https://furnixar.vercel.app/assets/tmnl-03-fyjeGGK9.jpg",
                "text": "Adipiscing lobortis interdum fringilla odio vitae nam pulvinar elementum. Nibh purus this integer. Auctor sit tempor varius."
            }
        ],
        "comment_form": {
            "fields": ["Full Name", "Email Address", "Message"],
            "submit_text": "Post Comment"
        }
    }

    return (
        <div>
           <Navbar/>
            <div className='max-w-[940px] mx-auto'>
                <ul className='flex flex-wrap items-center gap-[10px] pt-[120px]'>
                    <li className=''>{blogdata.date}</li>
                    <li className='bg-red-200 text-gray-800 text-xs font-medium px-2 py-1 rounded'>{blogdata.category}</li>
                </ul>
                <h1 className='text-3xl font-bold text-gray-800 pt-2 pb-4'>The Importance of Choosing the Right Furniture</h1>
                <img className="w-full h-[445px] object-cover bg-center" alt="blog-details" src={blogdata.featured_image}/>
            </div>
            <Footer/>
        </div>
    )
}
