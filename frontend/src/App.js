import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Shop from './pages/Shop/Shop';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Blog from './pages/blogs/Blog';
import BlogDetails from './pages/blogs/BlogDetails';
import ScrollToTop from './ScrollToTop';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:label" element={<BlogDetails />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
