import React from 'react'
import Navbar from '../../Components/navbar';
import Blogs from '../Home/Blogs';
import Footer from '../../Components/Footer'
import BlogDetails from './BlogDetails';

function Blog() {
  return (
    <div>
        <Navbar/>
        <BlogDetails/>
        <Footer />
    </div>
  )
}

export default Blog;