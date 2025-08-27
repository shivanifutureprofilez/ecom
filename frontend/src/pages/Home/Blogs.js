
import newArrival2 from '../../Assets/newArrival2.jpg';
import Blog2 from '../../Assets/Blog2.jpg';
import Blog3 from '../../Assets/Blog3.jpg';
import Blog4 from '../../Assets/Blog4.jpg';
import { Link } from 'react-router-dom';
function Blogs() {
    const blogs = [
        {
            img: newArrival2,
            date: "13th Sept 2025",
            label: "Chair",
            title: "Creating Your Dream Sanctuary: Inspirational Room Decor with Furnixar",
            body: "Nibh purus integer elementum in. ipsuim for now dolor sit amet of this conqure varius . . .",
        },
        {
            img: Blog2,
            date: "13th Sept 2025",
            label: "Table",
            title: "From Drab to Fab: Room Makeover Inspiration by Furnixar",
            body: "Nibh purus integer elementum in. ipsuim for now dolor sit amet of this conqure varius . . ."
        },
        {
            img: Blog3,
            date: "13th Sept 2025",
            label: "Shelf",
            title: "Small Space, Big Style: Room Decor Solutions from Furnixar",
            body: "Nibh purus integer elementum in. ipsuim for now dolor sit amet of this conqure varius . . ."
        },
        {
            img: Blog4,
            date: "13th Sept 2025",
            label: "Vass",
            title: "Innovative Room Decor: Unleashing Creativity with Furnixar",
            body: "Nibh purus integer elementum in. ipsuim for now dolor sit amet of this conqure varius . . ."
        },
    ];
    return (
        <section className="max-w-6xl mx-auto mt-12 px-4">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold leading-none text-gray-800 pt-9">Latest Blogs</h2>
                <a href="/collection" className="text-gray-700 pt-[40px] md:pt-[50px] font-medium hover:text-yellow-700">
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
                        <h2 className="text-gray-700 font-bold text-sm line-clamp-2">
                            <Link to={`/blog/chair`}>
                                {blog.title}
                            </Link>
                        </h2>
                        <p className="text-gray-500 text-sm line-clamp-3">{blog.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blogs