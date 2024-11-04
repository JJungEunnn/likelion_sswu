import React from "react";
import "../assets/scss/section/_page02.scss";
import Nav from "./Section/Nav";

function Page02() {
    return (
        <div className="page02">
            <header className="page02__header">
                <img
                    src="https://www.kusf.or.kr/images/sub3TopImg.png" // 헤더 배경 이미지를 지정합니다.
                    alt="한국대학스포츠협의회"
                    className="page02__header-image"
                />
                <h1 className="page02__title">
                    <strong>한국대학스포츠협의회</strong></h1>
                <p className="page02__subtitle">
                    대한민국 대학스포츠를 대표하고 통합하는 국내 유일의 기관
                </p>
            </header>
            <Nav />
            <h2 className="page02__title1">조직도</h2>
            <div className="page02__nav">
                <div className="page02__nav-item active">조직도</div>
                <div className="page02__nav-item">조직현황</div>
            </div>
            <div className="page02__image-container">
                <img
                    src="https://www.kusf.or.kr/images/img_organization_map.png"
                    alt="조직도"
                    className="page02__organization-image"
                />
            </div>
        </div>
    );
}

export default Page02;
