import React from 'react';
import Header from '../src/components/Section/Header';
import Slider from '../src/components/Section/Slider';
import Footer from '../src/components/Section/Footer';
import Main from '../src/components/Main';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Main />
      <Footer />
      {/* 나머지 컴포넌트 */}
    </div>
  );
}

export default App;
