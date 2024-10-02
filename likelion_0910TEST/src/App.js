import React from 'react';
import Header from './components/Header'; // 이미 있는 Header 컴포넌트
import Main from './components/Main';
import Footer from './components/Footer'; // Footer 컴포넌트를 임포트

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
      </main>
      <Footer /> {/* Footer 추가 */}
    </div>
  );
}

export default App;
