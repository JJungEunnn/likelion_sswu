import React from 'react';
// import Header from '../src/components/Header';
import Carousel from '../src/components/Carousel';
import MainContent from '../src/components/MainContent';
import Footer from '../src/components/Footer';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Carousel />
    {/* <Header /> */}
    <MainContent />
    <Footer />
    <Navbar />
  </div>
);

export default App;
