import React from 'react';
import '../scss/maincontent.scss';
import img1 from '../img/maincontent/coldwave/coldwave01.png'
import img2 from '../img/maincontent/coldwave/coldwave02.png'
import img3 from '../img/maincontent/coldwave/coldwave03.png'
import img4 from '../img/maincontent/coldwave/coldwave04.png'
import img5 from '../img/maincontent/coldwave/coldwave05.png'
import img6 from '../img/maincontent/coldwave/coldwave06.png'
import img7 from '../img/maincontent/eshape/eshape01.png'
import img8 from '../img/maincontent/eshape/eshape02.png'
import img9 from '../img/maincontent/eshape/eshape03.png'
import img10 from '../img/maincontent/eshape/eshape04.png'
import img11 from '../img/maincontent/eshape/eshape05.png'
import img12 from '../img/maincontent/eshape/eshape06.png'
import img13 from '../img/maincontent/eshape/eshape07.png'
import img14 from '../img/maincontent/eshape/eshape08.png'
import img15 from '../img/maincontent/tshirt/tshirt01.png'
import img16 from '../img/maincontent/tshirt/tshirt02.png'
import img17 from '../img/maincontent/tshirt/tshirt03.png'
import img18 from '../img/maincontent/tshirt/tshirt04.png'
import img19 from '../img/maincontent/tshirt/tshirt05.png'
import img20 from '../img/maincontent/tshirt/tshirt06.png'
import img21 from '../img/maincontent/tshirt/tshirt07.png'
import img22 from '../img/maincontent/tshirt/tshirt08.png'
import img23 from '../img/maincontent/sandle/sandle01.png'
import img24 from '../img/maincontent/sandle/sandle02.png'
import img25 from '../img/maincontent/sandle/sandle03.png'
import img26 from '../img/maincontent/sandle/sandle04.png'
import img27 from '../img/maincontent/sandle/sandle05.png'
import img28 from '../img/maincontent/sandle/sandle06.png'
import img29 from '../img/maincontent/sandle/sandle07.png'
import img30 from '../img/maincontent/sandle/sandle08.png'
import img31 from '../img/maincontent/interun/interun01.png'
import img32 from '../img/maincontent/interun/interun02.png'
import img33 from '../img/maincontent/interun/interun03.png'
import img34 from '../img/maincontent/interun/interun04.png'
import img35 from '../img/maincontent/interun/interun05.png'
import img36 from '../img/maincontent/interun/interun06.png'
import img37 from '../img/maincontent/interun/interun07.png'
import feature1 from '../img/maincontent/feature/feature01.png'; 
import feature2 from '../img/maincontent/feature/feature02.png'; 
import cameraicon from '../img/maincontent/camera/camera.svg';
import camera1 from '../img/maincontent/camera/camera01.png';
import camera2 from '../img/maincontent/camera/camera02.png';
import camera3 from '../img/maincontent/camera/camera03.png';
import camera4 from '../img/maincontent/camera/camera04.png';
import camera5 from '../img/maincontent/camera/camera05.png';
import camera6 from '../img/maincontent/camera/camera06.png';
import camera7 from '../img/maincontent/camera/camera07.png';
import camera8 from '../img/maincontent/camera/camera08.png';
import camera9 from '../img/maincontent/camera/camera09.png';
import camera10 from '../img/maincontent/camera/camera10.png';


import { useState } from 'react';

const tags = ['냉감티셔츠', '에쉬베', '반팔티셔츠', '페이토샌들', '인터런'];

const products = {
  냉감티셔츠: [
    { img: img1, explain:'공용   컴포트핏   라이프스타일', desc: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { img: img2, explain:'공용   컴포트핏   라이프스타일', desc: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { img: img3, explain:'공용   컴포트핏   라이프스타일', desc: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { img: img4, explain:'공용   컴포트핏   라이프스타일', desc: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { img: img5, explain:'공용   컴포트핏   라이프스타일', desc: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { img: img6, explain:'공용   컴포트핏   라이프스타일', desc: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
  ],
  에쉬베: [
    { img: img7, explain:'공용', desc: '휠라 에샤페 VC', price: '89,000원' },
    { img: img8, explain:'공용', desc: '휠라 에샤페 VC', price: '89,000원' },
    { img: img9, explain:'공용', desc: '휠라 에샤페 VC', price: '89,000원' },
    { img: img10, explain:'공용', desc: '휠라 에샤페 VC', price: '89,000원' },
    { img: img11, explain:'공용', desc: '휠라 에샤페 VC', price: '89,000원' },
    { img: img12, explain:'공용', desc: '휠라 에샤페 VC', price: '89,000원' },
    { img: img13, explain:'공용', desc: '휠라 에샤페 VC', price: '89,000원' },
    { img: img14, explain:'공용', desc: '휠라 에샤페 VC', price: '89,000원' },
  ],
  반팔티셔츠: [
    { img: img15, explain:'여성', desc: '수피마 사이드배색 반팔티', price: '39,000원' },
    { img: img16, explain:'여성', desc: '수피마 사이드배색 반팔티', price: '39,000원' },
    { img: img17, explain:'여성', desc: '수피마 사이드배색 반팔티', price: '39,000원' },
    { img: img18, explain:'여성', desc: '수피마 사이드배색 반팔티', price: '39,000원' },
    { img: img19, explain:'여성', desc: '수피마 사이드배색 반팔티', price: '39,000원' },
    { img: img20, explain:'여성', desc: '수피마 사이드배색 반팔티', price: '39,000원' },
    { img: img21, explain:'여성', desc: '수피마 사이드배색 반팔티', price: '39,000원' },
    { img: img22, explain:'여성', desc: '수피마 사이드배색 반팔티', price: '39,000원' },
  ],
  페이토샌들: [
    { img: img23, explain:'공용', desc: '슬릭워이비 샌들', price: '79,000원' },
    { img: img24, explain:'공용', desc: '슬릭워이비 샌들', price: '79,000원' },
    { img: img25, explain:'공용', desc: '슬릭워이비 샌들', price: '79,000원' },
    { img: img26, explain:'공용', desc: '슬릭워이비 샌들', price: '79,000원' },
    { img: img27, explain:'공용', desc: '슬릭워이비 샌들', price: '79,000원' },
    { img: img28, explain:'공용', desc: '슬릭워이비 샌들', price: '79,000원' },
    { img: img29, explain:'공용', desc: '슬릭워이비 샌들', price: '79,000원' },
    { img: img30, explain:'공용', desc: '슬릭워이비 샌들', price: '79,000원' },
  ],
  인터런: [
    { img: img31, explain:'공용', desc: '휠라 인터런', price: '99,000원' },
    { img: img32, explain:'공용', desc: '휠라 인터런', price: '99,000원' },
    { img: img33, explain:'공용', desc: '휠라 인터런', price: '99,000원' },
    { img: img34, explain:'공용', desc: '휠라 인터런', price: '99,000원' },
    { img: img35, explain:'공용', desc: '휠라 인터런', price: '99,000원' },
    { img: img36, explain:'공용', desc: '휠라 인터런', price: '99,000원' },
    { img: img37, explain:'공용', desc: '휠라 인터런', price: '99,000원' },
  ],
};

const cameraImages = [
  camera1,
  camera2,
  camera3,
  camera4,
  camera5,
  camera6,
  camera7,
  camera8,
  camera9,
  camera10,
];

const MainContent = () => {
    const [selectedTag, setSelectedTag] = useState(tags[0]);
  
    return (
      <div className="main-content">
        <h2>지금 많이 찾는 상품</h2>
        <div className="tags">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="products">
          {products[selectedTag].map((product, index) => (
            <div key={index} className="product">
              <img src={product.img} alt={`product-${index}`} />
              <p>{product.explain}</p>
              <p>{product.desc}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <div className="feature-section">
        <h2>기획전</h2>
        <div className="feature-products">
          <div className="feature-product">
            <img src={feature1} alt="AXILUS 3" />
            <p>FILA CUSTOM STUDIO</p>
            <p>최상의 플레이를 위한 맞춤형 테니스화</p>
            <button>자세히 보기</button>
          </div>
          <div className="feature-product">
            <img src={feature2} alt="Pertex Life" />
            <h3>Pertex Life</h3>
            <p>힐라 페텍스 시리즈와 함께하는 페텍스 라이프</p>
            <button>자세히 보기</button>
          </div>
        </div>
      </div>
      <div className="camera-section">
        <h2>@fila_korea</h2>
        <div className="camera-icon">
          <img src={cameraicon} alt="Camera Icon" />
        </div>
        <div className="camera-images">
          {cameraImages.map((img, index) => (
            <div key={index} className="camera-image">
              <img src={img} alt={`camera-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
