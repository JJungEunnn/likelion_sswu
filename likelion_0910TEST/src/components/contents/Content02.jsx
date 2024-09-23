import React, { useState } from 'react';
import '../../assets/scss/setting/content02.scss';

const Subject = ({ defaultImg, hoverImg, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="subject"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={isHovered ? hoverImg : defaultImg} alt={text} />
            <span>{text}</span>
        </div>
    );
};

const Content02 = () => {
    return (
        <section className="content02">
            <div className="content-row">
                <div className="text-section">
                    <span className="badge">초등 3학년 교과서</span>
                    <h2>선생님과 학생을 생각하는<br />지학사 교과서</h2>
                    <p>
                        가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.<br />
                        항상 학교 현장을 고민하는 지학사 교과서가<br />
                        그동안의 경험을 모아 더 나은 수업을 도와드립니다.
                    </p>
                </div>
                <div className="subjects">
                    <Subject
                        defaultImg="https://textbook.jihak.co.kr/img/mtab-suhak.png"
                        hoverImg="https://textbook.jihak.co.kr/img/mtab-suhak-on.png"
                        text="수학"
                    />
                    <Subject
                        defaultImg="https://textbook.jihak.co.kr/img/mtab-sahui.png"
                        hoverImg="https://textbook.jihak.co.kr/img/mtab-sahui-on.png"
                        text="사회"
                    />
                    <Subject
                        defaultImg="https://textbook.jihak.co.kr/img/mtab-gwahak.png"
                        hoverImg="https://textbook.jihak.co.kr/img/mtab-gwahak-on.png"
                        text="과학"
                    />
                    <Subject
                        defaultImg="https://textbook.jihak.co.kr/img/mtab-eumak.png"
                        hoverImg="https://textbook.jihak.co.kr/img/mtab-eumak-on.png"
                        text="음악"
                    />
                    <Subject
                        defaultImg="https://textbook.jihak.co.kr/img/mtab-misul.png"
                        hoverImg="https://textbook.jihak.co.kr/img/mtab-misul-on.png"
                        text="미술"
                    />
                    <Subject
                        defaultImg="https://textbook.jihak.co.kr/img/mtab-cheyook.png"
                        hoverImg="https://textbook.jihak.co.kr/img/mtab-cheyook-on.png"
                        text="체육"
                    />
                </div>
            </div>
            <div className="books">
                <li>
                    <span class="efft-pr1"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-suhak31-pr.png" alt="수학 3-1" />
                <img src="https://textbook.jihak.co.kr/img/mthunb-suhak32-pr.png" alt="수학 3-2" />
                <li>
                    <span class="efft-pr2"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-sahui31-pr.png" alt="사회 3-1" />
                <img src="https://textbook.jihak.co.kr/img/mthunb-sahui32-pr.png" alt="사회 3-2" />
                <li>
                    <span class="efft-pr3"></span>
                </li>
                <li>
                    <span class="efft-pr4"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-gwahak31-pr.png" alt="과학 3-1" />
                <img src="https://textbook.jihak.co.kr/img/mthunb-gwahak32-pr.png" alt="과학 3-2" />
                <li>
                    <span class="efft-pr5"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-eumak3-pr.png" alt="음악 3" />
                <img src="https://textbook.jihak.co.kr/img/mthunb-misul3-pr.png" alt="미술 3" />
                <li>
                    <span class="efft-pr6"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-cheyook3-pr.png" alt="체육 3" />
                <li>
                    <span class="efft-pr7"></span>
                </li>
            </div>
        </section>
    );
};

export default Content02;
