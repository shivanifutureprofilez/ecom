import comment1 from '../../Assets/comment1.jpg';
import comment2 from '../../Assets/comment2.jpg';
import comment3 from '../../Assets/comment3.jpg';
import { Link } from 'react-router-dom';

function Comments() {
    const commentData = [
        {
            "name": "Michele Obama",
            "image": comment1,
            "comment": "Adipiscing lobortis interdum fringilla odio vitae nam pulvinar elementum. Nibh purus this integer. Auctor sit tempor varius."
        },
        {
            "name": "John Smith Doe",
            "image": comment2,
            "comment": "Adipiscing lobortis interdum fringilla odio vitae nam pulvinar elementum. Nibh purus this integer. Auctor sit tempor varius."
        },
        {
            "name": "Max Franklline",
            "image": comment3,
            "comment": "Adipiscing lobortis interdum fringilla odio vitae nam pulvinar elementum. Nibh purus this integer. Auctor sit tempor varius."
        }
    ];

    return (
        <div className=' pt-3 pb-3'>
            <h2 className='text-xl font-bold text-gray-800 pt-12 pb-6 justify-center'>Comments(13)</h2>
            <div className='  bg-[#f8f5f0]'>
                {commentData.map((item, index) => (
                    <div className="flex p-4 border-b ">
                        <img src={item.image} alt={item.name} className="w-12 h-12 mr-3 rounded-full object-cover" />
                        <div className=''>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.comment}</p>
                        </div>
                        <Link to="#" className='text-title leading-none text-right ml-6 font-semibold'>Reply</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments;