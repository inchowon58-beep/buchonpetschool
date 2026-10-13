import { GALLERY, SITE } from "@/lib/site";

function img(n: string) {
  return `${SITE.imageCdn}/${n}.webp`;
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <main id="main">
        <section className="hero" aria-label="부천애견미용학원 히어로">
          <img
            className="hero-media"
            src={img("07")}
            alt="부천애견미용학원 부천펫스쿨 소형견 위생컷 실습"
            width={1600}
            height={1067}
            fetchPriority="high"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-brand">
              {SITE.brandEn} · {SITE.brandKo}
            </p>
            <h1>부천애견미용학원</h1>
            <p className="hero-lead">
              부천역에서 내려 바로 연습하는 서부 수도권 미용 수업.
              말티즈·푸들·비숑처럼 동네 살롱에 가장 많이 오는 소형견을
              위생컷부터 얼굴 라운드까지 반복합니다.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#curriculum">
                실습 순서 보기
              </a>
              <a className="btn btn-ghost" href="#way">
                부천역·송내 통학
              </a>
            </div>
          </div>
        </section>

        <section className="keyword-bar" aria-label="부천 검색어">
          <div className="container keyword-bar-inner">
            <span>#부천애견미용학원</span>
            <span>#부천펫스쿨</span>
            <span>#부천강아지미용학원</span>
            <span>#중동애견미용학원</span>
            <span>#송내애견미용</span>
            <span>#애견미용사자격증</span>
            <span>#애견미용학원비용</span>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Bucheon</p>
              <h2>환승 도시에서 배우는 살롱 기본기</h2>
              <p>
                <strong>부천애견미용학원</strong>을 찾는 분은 대개 두 부류입니다.
                중동·상동에서 반려견을 키우다 일을 바꾸고 싶은 분, 그리고
                인천 부평·계양이나 김포에서 1호선·7호선으로 넘어오는 분입니다.
                <strong>부천펫스쿨</strong>은 그 동선을 전제로 수업 길이를 나눕니다.
              </p>
              <p>
                부천 살롱 카운터에 올라오는 아이는 소형견이 많습니다.
                그래서 <strong>부천강아지미용학원</strong> 과정은 대형견 시연보다
                얼굴 주변 짧은 칼질, 발바닥 미끄럼 방지, 항문·배 위생을
                먼저 손에 붙입니다. 한 마리를 오래 붙잡는 연습이 아니라,
                보호자가 기다리는 동안 끝낼 수 있는 순서를 외웁니다.
              </p>
            </div>
            <aside className="about-card">
              <p className="about-card-label">상담 거점</p>
              <p className="about-card-title">{SITE.address}</p>
              <p className="about-card-note">{SITE.addressDetail}</p>
              <a className="about-card-link" href="#contact">
                예약 안내 보기 →
              </a>
            </aside>
          </div>
        </section>

        <section className="section section-alt" id="way">
          <div className="container narrow">
            <p className="eyebrow">Commute</p>
            <h2>부천역, 송내, 상동에서 오는 길이 다릅니다</h2>
            <p>
              7호선 부천역은 중동 신도시와 역세권이 붙어 있어 퇴근 후 수업이
              가능한 자리입니다. 1호선 송내는 역곡·부평 쪽에서 올라오는
              수강생이 많고, 상동은 버스 환승이 짧습니다.
              <strong>부천애견미용학원</strong> 상담에서는 사는 역을 먼저 듣고
              평일 저녁과 주말 오전 중 어디가 덜 빠지는지 같이 고릅니다.
            </p>
            <ul className="check-list">
              <li>부천역 하차 후 중동 생활권 도보·버스</li>
              <li>송내역에서 오는 인천·부평 수강생 시간표</li>
              <li>광명·김포는 자차 주차 가능 여부를 예약 때 확인</li>
              <li>결석이 잦은 요일은 과정 길이를 늘려 보충</li>
            </ul>
          </div>
        </section>

        <section className="section" id="curriculum">
          <div className="container">
            <div className="section-head left">
              <p className="eyebrow">Drill</p>
              <h2>소형견 네 가지를 순서대로</h2>
              <p>
                <strong>애견미용배우기</strong>를 부천에서 시작할 때는
                견종 이름을 많이 외우기보다, 매일 반복되는 네 동작을
                같은 순서로 하게 합니다.
              </p>
            </div>
            <div className="info-grid curriculum-grid">
              <article>
                <span className="step-num">01</span>
                <h3>테이블 고정</h3>
                <p>슬링 높이와 팔꿈치 위치를 맞춥니다. 작은 개가 버티지 못하면 컷은 시작하지 않습니다.</p>
              </article>
              <article>
                <span className="step-num">02</span>
                <h3>위생·발</h3>
                <p>배, 항문, 발바닥, 발톱. 부천 동네 미용실 예약의 절반이 여기서 끝납니다.</p>
              </article>
              <article>
                <span className="step-num">03</span>
                <h3>얼굴 라운드</h3>
                <p>눈밑과 입주위를 둥글게 남기는 가위. 말티즈·비숑 단골 스타일입니다.</p>
              </article>
              <article>
                <span className="step-num">04</span>
                <h3>드라이 볼륨</h3>
                <p>물을 말리는 방향에 따라 몸통 실루엣이 달라집니다. 컷보다 드라이를 더 많이 셉니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="career">
          <div className="container split">
            <figure className="media-frame">
              <img
                src={img("02")}
                alt="부천펫스쿨 수강생의 살롱 속도 연습"
                loading="lazy"
                width={800}
                height={1000}
              />
            </figure>
            <div>
              <p className="eyebrow">Salon</p>
              <h2>부천·인천 살롱이 보는 속도</h2>
              <p>
                취업 면접에서 포트폴리오 장수보다 자주 나오는 질문은
                “위생컷 한 마리에 몇 분이 걸리느냐”입니다.
                <strong>부천애견미용학원</strong>은 후반부에 타이머를 켜고
                같은 부위를 다시 하게 합니다. 인천 쪽으로 나가는 수강생에게는
                부평·계양의 좁은 매장 동선을, 부천에 남는 분에게는
                중동 상가 예약제 매장을 구분해 설명합니다.
              </p>
              <p>
                <strong>애견미용사자격증</strong>은 실기 항목을 체크리스트로
                나누되, 시험용 자세와 살롱용 자세를 일부러 섞지 않습니다.
                오전에 자격 포인트를 보고, 오후에 손님 속도만 잽니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="price">
          <div className="container narrow">
            <p className="eyebrow">Fee</p>
            <h2>애견미용학원비용은 횟수로 설명합니다</h2>
            <p>
              <strong>애견미용학원비용</strong>을 물을 때 총액만 들으면
              비교가 안 됩니다. 부천펫스쿨은 주당 출석, 모델견 배정 횟수,
              가위 개인 구매 여부, 자격 실기 모의 포함 여부를 항목으로 찢어
              보여 드립니다. <strong>부천애견미용학원추천</strong> 글을 보고
              오셔도 같은 표로 맞춰 드립니다.
            </p>
            <div className="info-grid price-grid">
              <article>
                <h3>위클리</h3>
                <p>주 2회. 송내·부천역 퇴근 수강에 맞춘 위생컷 중심입니다.</p>
              </article>
              <article>
                <h3>살롱트랙</h3>
                <p>주 4회. 얼굴 라운드와 드라이 볼륨을 모델견으로 반복합니다.</p>
              </article>
              <article>
                <h3>자격병행</h3>
                <p>살롱 속도에 실기 체크를 붙입니다. 시험 달만 따로 빼지 않습니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="gallery">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Floor</p>
              <h2>부천펫스쿨 작업 테이블</h2>
              <p>중동 상담실에서 보여 드리는 최근 실습 장면입니다.</p>
            </div>
            <div className="gallery-grid">
              {GALLERY.map((n) => (
                <figure key={n}>
                  <img
                    src={img(n)}
                    alt={`부천애견미용학원 실습 ${n}`}
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="container narrow">
            <p className="eyebrow">FAQ</p>
            <h2>부천에서 자주 받는 질문</h2>
            <div className="faq-list">
              <details open>
                <summary>부평에서 송내역으로 다녀도 수업이 이어지나요?</summary>
                <p>
                  1호선으로 오시는 분이 많습니다. 다만 막차 시간 때문에
                  화·목 저녁이 비는 경우가 있어, 상담 때 실제 퇴근 시각을
                  보고 주말 보충을 넣습니다.
                </p>
              </details>
              <details>
                <summary>우리 집 강아지를 모델로 데려와도 되나요?</summary>
                <p>
                  예방접종과 컨디션을 확인한 뒤 제한적으로 받습니다.
                  초반에는 학원 모델로 손 위치를 익히고, 이후 자견 얼굴컷을 시도합니다.
                </p>
              </details>
              <details>
                <summary>가위는 언제 사나요?</summary>
                <p>
                  첫 주에는 공용으로 감을 보고, 그립이 정해지면 개인 가위를 안내합니다.
                  비용 표에 도구 포함 여부를 따로 적습니다.
                </p>
              </details>
              <details>
                <summary>중동과 상동 중 어디가 상담 장소인가요?</summary>
                <p>
                  방문 상담은 부천역 중동 생활권에서 예약제로 진행합니다.
                  상동에서 오시는 길은 문자로 버스 번호를 보내 드립니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container narrow contact-box">
            <p className="eyebrow">Reserve</p>
            <h2>부천역 생활권 방문 상담</h2>
            <p>
              요일, 사는 역, 목표(취미·취업·자격)를 알려 주시면
              위클리와 살롱트랙 중 어디가 맞는지 먼저 말씀드립니다.
            </p>
            <p className="contact-brand">
              {SITE.brandKo} · {SITE.schoolName}
            </p>
            <p className="contact-address">{SITE.address}</p>
            <p className="contact-address-sub">{SITE.addressDetail}</p>
            <a className="btn btn-primary" href="#curriculum">
              실습 순서로 돌아가기
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand-en">{SITE.brandEn}</p>
            <p className="footer-brand-ko">{SITE.brandKo}</p>
            <p className="footer-seo">{SITE.title}</p>
          </div>
          <div className="footer-meta">
            <p>{SITE.address}</p>
            <p>부천애견미용학원 · 부천펫스쿨 · 부천강아지미용학원</p>
            <p className="footer-managed">
              <img src="/kkf-logo.png" alt="" width={36} height={36} />
              <span>한국애견연맹 반려문화증진위원회에 의해 관리되는 페이지입니다.</span>
            </p>
            <p className="footer-copy">
              &copy; {year} {SITE.brandKo}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
