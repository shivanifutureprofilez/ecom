// import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer';

import CategoryBar from './Components/CategoryBar';
import Navbar from './Components/navbar';
import { Banner } from './Components/Banner';
import NewArrival from './Components/NewArrival';
import Blogs from './Components/Blogs';
import Newsletter from './Components/Newsletter';
import { Importance } from './Components/Importance';
import PhotoGrid from './Components/PhotoGrid';
import Swiper from './Components/Swiper';

 
function App() {
  return (
    <div className="App">
        {/* Banner */}
        <Navbar />
        {/* Navbar */}
        <Banner />
          {/* CategoryBar */}
        <CategoryBar />
      {/* New Arrival */}
      <NewArrival  title='New Arrival' />
      {/* Why You Choose Us */}
      <Importance/>
      {/* Best Sellers Grid */}
      <PhotoGrid/>
      {/* Trending Bar */}
      <NewArrival title='Trending' />
      {/* Slider */}
      <Swiper/>
      {/* Latest Blog Bar */}
      <Blogs />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
