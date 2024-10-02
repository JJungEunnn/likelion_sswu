import React, { useState } from 'react';
import '../../assets/scss/setting/content03.scss';

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

const Content03 = () => {
    return (
        <section className="content03">
            <div className="content-row">
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
                <div className="text-section">
                    <span className="badge">초등 4학년 교과서</span>
                    <h2>한 단계 더 성장하는<br />아이들과 선생님</h2>
                    <p>
                        수업의 과정은 즐겁고, 성취는 보람찬 2022 개정 교육과정 교과서.<br />
                        내용의 깊이는 더하고 과정은 즐겁게 구성한<br />
                        지학사 교과서와 함께 새로운 수업을 경험해 보세요.
                    </p>
                </div>
            </div>
            <div className="books">
                <li>
                    <span class="efft-pr1"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-suhak41-pr.png" alt="수학 4-1" />
                <img src="https://textbook.jihak.co.kr/img/mthunb-suhak42-pr.png" alt="수학 4-2" />
                <li>
                    <span class="efft-pr2"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-sahui41-pr.png" alt="사회 4-1" />
                <img src="https://textbook.jihak.co.kr/img/mthunb-sahui42-pr.png" alt="사회 4-2" />
                <li>
                    <span class="efft-pr3"></span>
                </li>
                <li>
                    <span class="efft-pr4"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-gwahak41-pr.png" alt="과학 4-1" />
                <img src="https://textbook.jihak.co.kr/img/mthunb-gwahak42-pr.png" alt="과학 4-2" />
                <li>
                    <span class="efft-pr5"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-eumak4-pr.png" alt="음악 4" />
                <img src="https://textbook.jihak.co.kr/img/mthunb-misul4-pr.png" alt="미술 4" />
                <li>
                    <span class="efft-pr6"></span>
                </li>
                <img src="https://textbook.jihak.co.kr/img/mthunb-cheyook4-pr.png" alt="체육 4" />
                <li>
                    <span class="efft-pr7"></span>
                </li>
            </div>
        </section>
    );
};

export default Content03;
