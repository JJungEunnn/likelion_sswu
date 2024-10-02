import React from 'react';
import Content01 from '../components/contents/Content01'; 
import Content02 from '../components/contents/Content02';
import Content03 from '../components/contents/Content03';

const Main = () => {
  return (
    <main>
      <Content01 />
      <Content02 />
      <Content03 /> {/* Content01 컴포넌트 호출 */}
    </main>
  );
};

export default Main;
