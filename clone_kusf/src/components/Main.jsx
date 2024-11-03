import React from 'react'
import '../assets/scss/section/_main.scss'

const Main = () => {
  return (
    <div>
      <main className="main-container">
        {/* 배너 슬라이드 섹션 */}
        <div className="banner-section">
          <div className="banner-item">
            <a href="https://m.post.naver.com/viewer/postView.naver?volumeNo=39700577&memberNo=1352526" target="_blank" rel="noopener noreferrer">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/main/20241021153715644036.jpg" alt="슬라이드 1" />
                <div className="overlay">
                  <strong>2025 KUSF 대학스포츠 슬로건 공모전</strong>
                </div>
              </div>
            </a>
          </div>
          <div className="banner-item">
            <a href="https://www.kusf.or.kr/news/news_view.html?page=1&seq=1261&board=notice" target="_blank" rel="noopener noreferrer">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/main/20241011111555870593.png" alt="슬라이드 2" />
                <div className="overlay">
                  <strong>실내 트라이애슬론 챌린지 참가팀 모집</strong>
                </div>
              </div>
            </a>
          </div>
          <div className="banner-item">
            <a href="https://www.kusf.or.kr/news/pds_view.html?page=1&seq=1240&board=pds" target="_blank" rel="noopener noreferrer">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/main/20240619154659470194.jpg" alt="슬라이드 3" />
                <div className="overlay">
                  <strong>2024 대학운동부 평가 및 지원 사업 진행 및 정••</strong>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* KUSF NEWS 섹션 */}
        <div className="content-section">
          <section className="news-section">
            <h2>KUSF NEWS</h2>
            <div className="news-items">
              <div className="news-item">
                <img src="https://www.kusf.or.kr/UploadDir/202411/20241101162244857828.png" alt="NEWS 1" />
                <p>NEWS</p>
                <p>2024년도 대학스포츠 최강 클럽챔피언 결정전 개막</p>
              </div>
              <div className="news-item">
                <img src="https://www.kusf.or.kr/UploadDir/202408/20240826092129336469.png" alt="NEWS 2" />
                <p>NEWS</p>
                <p>2024 KUSF 대학운동부 학생선수 소양교육 및 스포츠인권교육 개최</p>
              </div>
              <div className="news-item">
                <img src="https://www.kusf.or.kr/UploadDir/202408/20240821111728547467.png" alt="NEWS 3" />
                <p>NEWS</p>
                <p>KUSF, 2025학년도 체육특기자 대입정보 원스톱 서비스 제공</p>
              </div>
              <div className="news-item">
                <img src="https://www.kusf.or.kr/UploadDir/202406/20240625091245900897.jpg" alt="NEWS 4" />
                <p>NEWS</p>
                <p>KUSF, 2025학년도 체육특기자 대입정보 원스톱 서비스 제공</p>
              </div>
              <div className="news-item">
                <img src="https://www.kusf.or.kr/UploadDir/202406/20240603152209882928.jpg" alt="NEWS 5" />
                <p>NEWS</p>
                <p>KUSF, 2025학년도 체육특기자 대입정보 원스톱 서비스 제공</p>
              </div>
              <div className="news-item">
                <img src="https://www.kusf.or.kr/UploadDir/202404/20240429091405367284.jpg" alt="NEWS 6" />
                <p>NEWS</p>
                <p>KUSF, 2025학년도 체육특기자 대입정보 원스톱 서비스 제공</p>
              </div>
              {/* 추가적인 뉴스 아이템들 */}
            </div>
          </section>

          {/* NOTICE 섹션 */}
          <aside className="notice-section">
            <div className="notice-header">
              <h2>NOTICE</h2>
              <a href="https://www.kusf.or.kr/news/notice" target="_blank" rel="noopener noreferrer">
                <img src="https://www.kusf.or.kr/images/mainTit_more.png" alt="더 보기" />
              </a>
            </div>
            <ul>
              <li><a href="#">2024 스포츠윤리교육 전문강사 모집(스포츠윤리센터)</a></li>
              <li><a href="#">2025 KUSF 대학스포츠를 대표하는 U-리그 / 클럽챔피...</a></li>
              <li><a href="#">[모집] KUSF 클럽챔피언십 2024 실내 트라이애슬론 챌...</a></li>
              <li><a href="#">KUSF 사무처 10월 휴무 안내(10월 1,3,9일)</a></li>
              <li><a href="#">KUSF 사무처 9월 휴무 안내(9월 16,17,18일)</a></li>
              <li><a href="#">[모집] KUSF 클럽챔피언십 2024 3X3 농구 챌린지 참가...</a></li>
              <li><a href="#">[모집] 2024 KUSF U-스포츠마케팅 러너 2차 교육 모집...</a></li>
              <li><a href="#">2024 KUSF 대학운동부 학생선수 소양교육 개최</a></li>
              <li><a href="#">2024 KUSF 대학운동부 학생 선수 스포츠인권교육 개최</a></li>
            </ul>
          </aside>
        </div>
        <section className="ulive-section">
          <div className="ulive-banner">
            <a href="https://www.youtube.com/@KUSFSPORT_TV" target="_blank" rel="noopener noreferrer">
              <img src="https://www.kusf.or.kr/UploadDir/main/20240321100153892703.jpg" alt="배너" />
            </a>

          </div>
          <h2>U-LIVE TV</h2>
          <div className="ulive-items">
            <div className="ulive-item">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/202410/20241015174628327269.png" alt="2024 KUSF 대학농구 U-리그" />
                <img src="https://www.kusf.or.kr/images/mainPlay.png" alt="재생 아이콘" className="play-icon" />
              </div>
              <p>2024 KUSF 대학농구 U-리그</p>
              <p>2024.10.04</p>
              <p>연세대 vs 중앙대</p>
            </div>
            <div className="ulive-item">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/202410/20241015174322481792.png" alt="2024 KUSF 대학농구 U-리그" />
                <img src="https://www.kusf.or.kr/images/mainPlay.png" alt="재생 아이콘" className="play-icon" />
              </div>
              <p>2024 KUSF 대학농구 U-리그</p>
              <p>2024.10.04</p>
              <p>성균관대 vs 동국대</p>
            </div>
            <div className="ulive-item">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/202410/20241015174027419079.png" alt="2024 KUSF 대학농구 U-리그" />
                <img src="https://www.kusf.or.kr/images/mainPlay.png" alt="재생 아이콘" className="play-icon" />
              </div>
              <p>2024 KUSF 대학농구 U-리그</p>
              <p>2024.10.04</p>
              <p>단국대 vs 한양대</p>
            </div>
            <div className="ulive-item">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/202410/2024101517302826608.png" alt="2024 KUSF 대학농구 U-리그" />
                <img src="https://www.kusf.or.kr/images/mainPlay.png" alt="재생 아이콘" className="play-icon" />
              </div>
              <p>2024 KUSF 대학농구 U-리그</p>
              <p>2024.10.04</p>
              <p>고려대 vs 조선대</p>
            </div>
            <div className="ulive-item">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/202410/20241015172749108542.png" alt="2024 KUSF 대학농구 U-리그" />
                <img src="https://www.kusf.or.kr/images/mainPlay.png" alt="재생 아이콘" className="play-icon" />
              </div>
              <p>2024 KUSF 대학농구 U-리그</p>
              <p>2024.10.04</p>
              <p>명지대 vs 동국대</p>
            </div>
            <div className="ulive-item">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/202410/2024101517254540914.png" alt="2024 KUSF 대학농구 U-리그" />
                <img src="https://www.kusf.or.kr/images/mainPlay.png" alt="재생 아이콘" className="play-icon" />
              </div>
              <p>2024 KUSF 대학농구 U-리그</p>
              <p>2024.10.04</p>
              <p>여대부 광주대 vs 부산대</p>
            </div>
            <div className="ulive-item">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/202410/20241015172130850621.png" alt="2024 KUSF 대학농구 U-리그" />
                <img src="https://www.kusf.or.kr/images/mainPlay.png" alt="재생 아이콘" className="play-icon" />
              </div>
              <p>2024 KUSF 대학농구 U-리그</p>
              <p>2024.10.04</p>
              <p>건국대 vs 경희대</p>
            </div>
            <div className="ulive-item">
              <div className="img-wrapper">
                <img src="https://www.kusf.or.kr/UploadDir/202410/20241015171926546565.png" alt="2024 KUSF 대학농구 U-리그" />
                <img src="https://www.kusf.or.kr/images/mainPlay.png" alt="재생 아이콘" className="play-icon" />
              </div>
              <p>2024 KUSF 대학농구 U-리그</p>
              <p>2024.10.04</p>
              <p>여대부 수원대 vs 광주여대</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
