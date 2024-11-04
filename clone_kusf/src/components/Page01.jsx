import React from "react";
import Nav from "./Section/Nav";
import greeting from "../assets/img/kusf_greeting.png"
import "../assets/scss/section/_page01.scss";

function Page01() {
    return (
        <div className="page01">
            <header className="page01__header">
                <img
                    src="https://www.kusf.or.kr/images/sub3TopImg.png" // 헤더 배경 이미지를 지정합니다.
                    alt="한국대학스포츠협의회"
                    className="page01__header-image"
                />
                <h1 className="page01__title">
                    <strong>한국대학스포츠협의회</strong></h1>
                <p className="page01__subtitle">
                    대한민국 대학스포츠를 대표하고 통합하는 국내 유일의 기관
                </p>
            </header>
            <Nav />
            <main className="page01__content">
                <section className="page01__greeting">
                    <h2>
                        <span className="page01__title-underline">인사말</span> {/* 특정 단어에만 밑줄 적용 */}
                    </h2>
                    <div className="page01__greeting-box">
                        <img
                            src={greeting}
                            alt="조정우 회장"
                            className="page01__president-image"
                        />
                    </div>
                    <p className="page01__description">
                        한국대학스포츠협의회는 전국의 대학운동부를 운영하는 대학 협의체로서
                        대학스포츠의 본질을 회복하고 스포츠 선진화를 달성하고자 2010년에 설립되었습니다.
                    </p>
                    <p className="page01__description">
                        최근 몇 년간 코로나19로 어려운 환경 속에서도 KUSF는 대학스포츠가 당면한
                        현안에 대해 신속하게 협의하고, 합리적 대안을 모색하며 대학스포츠의 발전을
                        위한 다양한 정책수립과 계획된 사업 추진을 위해 부단한 노력을 기울여왔습니다.
                    </p>
                    <p className="page01__description">
                        그동안 열악한 환경 속에서 대학운동부를 운영하는 대학에 힘을 보태고자 예산을
                        지속적으로 지원하고 학생선수들이 운동과 학업을 병행하여 전인적 인재로 거듭날
                        수 있도록 학사관리 정상화 지원을 위한 사업 확대와 인권친화적 대학운동부
                        문화조성을 위해 대학스포츠 인권위원회를 신설하고 문화체육관광부와 함께
                        대학운동부 스포츠인권 지침을 발표하였습니다.
                    </p>
                    <p className="page01__description">
                        또한 대학생의 1인 1스포츠 실천 참여 확산을 위한 KUSF 클럽챔피언십 대회 개최와
                        여러 대학생들에게 다양한 기회제공을 확대해 나가고 있습니다.
                    </p>
                    <p className="page01__description">
                        아울러 우리 KUSF가 대학스포츠의 다양한 정책 수립과 사업 추진을 통해 대한민국
                        스포츠의 중추적인 역할을 할 수 있도록 조성하여 주신 전국의 회원대학 총장님들께
                        깊은 감사의 말씀을 드립니다.
                    </p>
                    <p className="page01__description">
                        전국 대학스포츠 관계자 및 회원 여러분, 우리 KUSF는 지금까지의 성과를 바탕으로
                        더 큰 새로운 대학스포츠의 도약을 위해 대학스포츠 이해관계자 관심과 참여 제고,
                        스포츠권과 학습권의 조화를 통한 스포츠 혁신 도모, 통합 마케팅을 통한 수익 창출
                        등의 선진형 시스템 고도화를 위해 최선을 다하고, 대학스포츠 구성원 모두가 보다
                        나은 삶으로 성장할 수 있도록 앞장서겠습니다.
                    </p>
                    <p className="page01__description">
                        전국 대학스포츠 관계자 및 회원 여러분의 아낌없는 격려와 성원을 부탁드립니다.
                        감사합니다.
                    </p>
                    <p className="page01__description01">
                        한국대학스포츠협의회(KUSF) 회장
                    </p>
                    <p className="page01__description02">
                        조명우
                    </p>

                </section>
            </main>
        </div>
    );
}

export default Page01;
