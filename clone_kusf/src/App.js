import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Section/Header';
import Footer from '../src/components/Section/Footer';
import Main from '../src/components/Main';
import Page01 from '../src/components/Page01';
import Page02 from '../src/components/Page02'; // Page02 컴포넌트 가져오기
import Page03 from '../src/components/Page03';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
        <Route path="/page03" element={<Page03 />} />  {/* 조직도 페이지 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
