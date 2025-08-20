
import newArrival2 from '../../Assets/newArrival2.jpg';
import Blog2 from '../../Assets/Blog2.jpg';
import Blog3 from '../../Assets/Blog3.jpg';
import Blog4 from '../../Assets/Blog4.jpg';

import React from 'react'

function Blogs () {
    const blogs = [
    {
        img: newArrival2,
        date: "13th Sept 2025",
        label: "Chair",
        title: "Chairs in horror",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        img: Blog2,
        date: "13th Sept 2025",
        label: "Table",
        title: "Chairs in horror",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        img: Blog3,
        date: "13th Sept 2025",
        label: "Shelf",
        title: "Chairs in horror",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        img: Blog4,
        date: "13th Sept 2025",
        label: "Bed",
        title: "Chairs in horror",
        body: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
];
    return (
        <section className="max-w-6xl mx-auto mt-12 px-4">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Latest Blogs</h2>
                <a href="/collection" className="text-gray-700 font-medium hover:text-yellow-700 flex items-center gap-2">
                    See All Collection <span>&rarr;</span>
                </a>
            </div>
            <hr className="mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {blogs.map((blog) => (
                    <div key={blog.label}>
                        <img src={blog.img} alt={blog.label} className="rounded-lg w-full h-64 object-cover mb-4 shadow" />
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-gray-800 font-semibold text-xs">
                                {blog.date}
                            </span>
                            <span className=" bg-red-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                                {blog.label}
                            </span>
                        </div>
                        {/* <div className="text-gray-800 font-semibold">{blog.label}</div> */}
                        <div className="text-gray-700">{blog.title}</div>
                        <div className="text-gray-500 text-sm">{blog.body}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blogs