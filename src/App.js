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

function App() {
  return (
    <div className="App">
      <div className=" w-full h-screen">
        {/* Banner */}
        <Banner />
        {/* Navbar */}
        <Navbar />
        <div className="relative inset-0 flex items-center justify-center">
          {/* CategoryBar */}
          <CategoryBar />
        </div>
      </div>
      {/* New Arrival */}
      <NewArrival title='New Arrival' />
      {/* Why You Choose Us */}
      <Importance/>
      {/* Best Sellers Grid */}

      {/* Trending Bar */}
      <NewArrival title='Trending' />
      {/* Slider */}

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
