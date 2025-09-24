import Navbar from '../../Components/navbar'
import blogAuthor from '../../Assets/blog-author.jpg';
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer';
import { TiTick } from "react-icons/ti";
import { PiQuotesBold } from "react-icons/pi";
import Tags from './Tags';
import Blogs from '../Home/Blogs'
import BlogNavigator from './BlogNavigator';
import Comments from './Comments';
import CommentForm from './CommentForm';


export default function BlogDetails() {
    const { label } = useParams();
    const blogdata = {
        "date": "19 June, 2025",
        "category": "Interior",
        "title": "The Importance of Choosing the Right Furniture",
        "author": {
            "name": "Jon Doue",
            "image": "https://furnixar.vercel.app/assets/tmnl-02-BwH4vLAt.jpg"
        },
        "featured_image": "https://cozycorner-be87.kxcdn.com/cozycorner-simple/wp-content/uploads/2025/03/simple-banner-2.jpg",
        "content": [
            {
                "id": 1,
                "type": "paragraph",
                "text": "In the realm of home decor, where style meets functionality, Furnixar stands as a beacon of innovation and elegance. With a commitment to quality craftsmanship and a keen eye for design, Furnixar products have the power to transform any living space into a sanctuary of comfort and beauty. From cozy living rooms to serene bedrooms, Furnixar offers a diverse range of home decor solutions that cater to every taste and lifestyle. Lets delve into some of the key elements that make Furnixar a frontrunner in the world of home decor."
            },
            {
                "id": 2,
                "type": "heading",
                "level": 3,
                "text": "Main features of our product"
            },
            {
                "id": 3,
                "type": "list",
                "style": "unordered",
                "items": [
                    "All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                    "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                    "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate."
                ]
            },
            {
                "id": 4,
                "type": "paragraph",
                "text": "Furnixar transcends the ordinary, offering home decor solutions that inspire and delight. With their dedication to craftsmanship, timeless design, and sustainability, Furnixar invites you to elevate your home and create a space that truly reflects your lifestyle and personality.Furnixar transcends the ordinary, offering home decor solutions that inspire and delight."
            },
            {
                "id": 5,
                "type": "blockquote",
                "text": "Nibh purus integer elementum in tellus vulputate habitasse of this is vulputate posuere habitant vel tempor varius."
            },
            {
                "id": 6,
                "type": "heading",
                "level": 4,
                "text": "Main features of our product"
            },
            {
                "id": 7,
                "type": "paragraph",
                "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, beatae dolore! Facere, neque perspiciatis laudantium adipisci fugit sequi nemo illum!"
            },
            {
                "id": 8,
                "type": "list",
                "style": "ordered",
                "items": [
                    "All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.",
                    "Adipiscing lobortis interdum fringilla euismod odio of this furniture.",
                    "Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate."
                ]
            },
            {
                "id": 9,
                "type": "paragraph",
                "text": "All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut vulputate posuere habitant vel tempor varius."
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
            <Navbar />
            <div className='max-w-[940px] mx-auto p-5 md:p-0'>
                <ul className='flex flex-wrap items-center gap-[10px] pt-[80px] md:pt-[120px]'>
                    <li className=''>{blogdata.date}</li>
                    <li className='bg-red-200 text-gray-800 text-xs font-medium px-2 py-1 rounded'>{blogdata.category}</li>
                </ul>
                <h1 className='text-3xl font-bold text-gray-800 pt-2 pb-4'>The Importance of Choosing the Right Furniture</h1>
                <div className='flex justify-left gap-4'>
                    <img src={blogAuthor} className='rounded-full mb-4 h-[40px] w-[40px]'></img>
                    <p className='mt-2'>{blogdata.author.name}</p>
                </div>
                <img className="w-full h-[445px] object-cover bg-center" alt="blog-details" src={blogdata.featured_image} />
                <div className='mx-auto'>
                    {blogdata && blogdata?.content && blogdata?.content?.map((content, index) =>
                        (content.id === 1 && <p key={index} className='pt-8 pb-8 text-base leading-loose'>{content.text}</p>) ||
                        (content.id === 2 && <h2 className="text-2xl font-bold text-gray-800 pt-2 pb-4" key={content.id}>{content.text}</h2>) ||
                        (content.id === 3 && <ul key={content.id} className=''>
                            {content.items.map((item, idx) =>
                                <div className='flex gap-3'>
                                    <TiTick className='text-yellow-600 text-2xl md:text-lg' />
                                    <li className="pb-3" key={idx}>{item}</li>
                                </div>
                            )}
                        </ul>) ||
                        (content.id === 4 && <p key={content.id} className='pt-6 pb-8 text-base leading-loose'>{content.text}</p>) ||

                        (content.id === 5 &&
                            <div className='flex justify-center bg-[#f5f5f5] p-3 rounded-sm gap-2'>
                                <PiQuotesBold size={54} className='text-yellow-700 text-4xl' />
                                <h4 key={content.id} className='text-xl leading-loose '>
                                    {content.text}
                                </h4>
                            </div>) ||
                        (content.id === 6 && <h4 key={content.id} className='text-xl font-bold text-gray-800 pt-8 pb-2'>{content.text}</h4>) ||
                        (content.id === 7 && <p className='pt-3 pb-8 text-base leading-loose'>{content.text}</p>) ||
                        (content.id === 8 && (
                            <ol key={index} className="list-decimal list-inside text-black">
                                {content.items.map((item, idx) => (
                                    <li className="pb-3" key={idx}>
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        )) ||
                        (content.id === 9 && <p className='pt-3 pb-8 text-base leading-loose'>{content.text}</p>)
                    )}
                </div>
                <Tags />
                <BlogNavigator />
                <Comments />
                <CommentForm />

            </div>
            <Blogs />
            <Footer />
        </div>
    )
}
