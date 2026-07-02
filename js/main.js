<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>kt cloud TECH UP | 프로덕트 디자인 전문가 과정</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="./css/main.css" rel="stylesheet" />
</head>
<body>

<!-- ================= HEADER ================= -->
<header class="header" id="header">
  <div class="header__inner">
    <a href="#top" class="logo" aria-label="kt cloud TECH UP">
      <svg class="logo__svg" width="108" height="30" viewBox="0 0 108 30" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="10" font-family="Pretendard, sans-serif" font-weight="800" font-size="11" fill="#17181B">kt</text>
        <text x="15" y="10" font-family="Pretendard, sans-serif" font-weight="600" font-size="11" fill="#FE2E36">cloud</text>
        <text x="0" y="27" font-family="Pretendard, sans-serif" font-weight="800" font-size="21" letter-spacing="-0.5" fill="#17181B">TECH UP</text>
      </svg>
    </a>

    <nav class="nav" id="nav">
      <a href="#apply-type">선발 과정</a>
      <a href="#curriculum">교육 커리큘럼</a>
      <a href="#reviews">현장 스케치</a>
      <a href="#benefits">수강생 혜택</a>
      <a href="#faq">자주묻는질문</a>
      <a href="#top" class="nav__cta">지원 확인</a>
    </nav>

    <button class="menu-toggle" id="menuToggle" aria-label="메뉴 열기">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<main id="top">

  <!-- ================= HERO ================= -->
  <section class="hero">
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="hero__content">
      <h1>기업에서 선호하는<br>프로덕트 디자이너 성장할 수 있는 기회</h1>
      <p>사용자 중심 경험을 설계하는 kt cloud 프로덕트 디자인 전문가 과정</p>
      <a href="#apply-type" class="btn btn--primary">지원하기</a>
    </div>
  </section>

  <!-- ================= APPLY TYPE ================= -->
  <section class="section apply-type" id="apply-type">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">디자인 시장에서 인재가 되길 희망하나요?</p>
        <h2>잠재력 있는 지원자를 위한 과정에<br>참가해보세요.</h2>
      </div>

      <div class="apply-type__tabs" role="tablist">
        <button class="pill pill--active" data-target="cardBattle" role="tab" aria-selected="true">Portfolio Battle</button>
        <button class="pill" data-target="cardGem" role="tab" aria-selected="false">Hidden Gem</button>
      </div>

      <div class="apply-type__body">
        <div class="apply-type__cards">

          <article class="apply-card" id="cardBattle">
            <div class="apply-card__head">
              <span class="apply-card__badge">Portfolio Battle</span>
            </div>
            <p class="apply-card__desc">프로젝트와 포트폴리오만으로<br>빠르게 선발할 수 있습니다.</p>

            <dl class="apply-card__rows">
              <div class="apply-card__row">
                <dt>과정 지원</dt>
                <dd>26.4.9 (목) - 26.5.25 (월)</dd>
              </div>
              <div class="apply-card__row">
                <dt>필요한 절차</dt>
                <dd>지원서 및 고용24 수강신청</dd>
              </div>
              <div class="apply-card__row">
                <dt>최종 합격</dt>
                <dd>서류 제출 후 5영업일 이내 최종 합격 발표</dd>
              </div>
            </dl>
            <p class="apply-card__note">본 전형은 별도의 면접 없이, 제출 서류를 바탕으로 최종 합격 여부가 안내됩니다.</p>
          </article>

          <article class="apply-card" id="cardGem">
            <div class="apply-card__head">
              <span class="apply-card__badge">Hidden Gem</span>
            </div>
            <p class="apply-card__desc">가능성을 지닌 지원자는 그룹 면접으로<br>협업, 인성을 확인합니다.</p>

            <dl class="apply-card__rows">
              <div class="apply-card__row">
                <dt>과정 지원</dt>
                <dd>- 26.5.25 (월)</dd>
              </div>
              <div class="apply-card__row">
                <dt>서류 합격</dt>
                <dd>26.5.26 (화)</dd>
              </div>
              <div class="apply-card__row">
                <dt>면접</dt>
                <dd>26.5.28 (목) - 26.5.29 (금)</dd>
              </div>
              <div class="apply-card__row">
                <dt>최종 합격</dt>
                <dd>26.6.2 (화)</dd>
              </div>
            </dl>
          </article>

        </div>

        <div class="apply-type__photo">
          <div class="photo-placeholder">
            <span class="photo-placeholder__tag">TECH UP</span>
            <span class="photo-placeholder__title">WARM UP DAY</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= PROGRAM INFO ================= -->
  <section class="section program-info">
    <div class="wrap">
      <h3 class="program-info__title">챌린저를 위한 소수정예 프로그램</h3>
      <div class="program-info__grid">
        <div class="info-box info-box--split">
          <div class="info-box__item">
            <span class="info-box__label">지원 일정</span>
            <span class="info-box__value">26.4.9 (목) - 26.5.25 (월)</span>
          </div>
          <div class="info-box__item">
            <span class="info-box__label">교육 일정</span>
            <span class="info-box__value">26.6.10 (수) - 26.12.23 (수)</span>
          </div>
        </div>
        <div class="info-box">
          <div class="info-box__item">
            <span class="info-box__label">모집 인원</span>
            <span class="info-box__value">50명</span>
          </div>
        </div>
        <div class="info-box">
          <div class="info-box__item">
            <span class="info-box__label">교육 방법</span>
            <span class="info-box__value">온라인 / 비대면 실시간</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= REVIEWS ================= -->
  <section class="section reviews" id="reviews">
    <div class="reviews__glow" aria-hidden="true"></div>
    <div class="wrap">
      <div class="section-head section-head--center">
        <p class="eyebrow">kt cloud에서 성장한 챌린저들의 후기</p>
        <h2>kt cloud 프로그램은 확실한 성장의 기회에요<br>어떻게 성장했는지 수강한 챌린저들 후기를 보세요</h2>
        <a href="#apply-type" class="btn btn--primary">지원하기</a>
      </div>

      <div class="review-grid">
        <article class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-card__text">솔직히 KT라는 이름을 보고 신청했어요. 막상 수업 들어보니 기대 이상이었습니다. Figma 실무부터 실제 UX 개선 프로젝트까지 현업에서 쓸 수 있는 걸 많이 배웠어요.</p>
          <div class="review-card__author">
            <span class="avatar"></span>
            <span>박상현</span>
          </div>
        </article>

        <article class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-card__text">6주간 팀원들과 프로젝트를 비교했을 때, 리서치+설계+프로토타이핑까지 전 과정을 다루는 곳이 없었어요. 이 과정 후로 이직할 때 가장 큰 무기가 됐습니다.</p>
          <div class="review-card__author">
            <span class="avatar"></span>
            <span>이지은</span>
          </div>
        </article>

        <article class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-card__text">디자인 끝날 이미지 클럽했을 알렸어요. KT라서 신뢰가 갔고, 그 자체가 저에게는 든든한 이유였어요. 커리어 전환을 고민하던 저에게 확실한 방향을 잡아준 과정이었습니다.</p>
          <div class="review-card__author">
            <span class="avatar"></span>
            <span>홍길동</span>
          </div>
        </article>

        <article class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-card__text">아쉬웠던 부분도 UX 학습 시간이나 알려드리고, 수강생 간의 네트워킹 부분이었는데 실제로 잘 챙겨주셨어요. 감사한 마음으로 후기 남깁니다.</p>
          <div class="review-card__author">
            <span class="avatar"></span>
            <span>김서연</span>
          </div>
        </article>

        <article class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-card__text">그동안 디자인만 해왔던 저에게는 UX가 낯설었지만, 이 과정에서 실무자 관점의 피드백을 촘촘히 받을 수 있어서 자신감을 얻었습니다.</p>
          <div class="review-card__author">
            <span class="avatar"></span>
            <span>최윤아</span>
          </div>
        </article>

        <article class="review-card">
          <div class="stars">★★★★★</div>
          <p class="review-card__text">현업 멘토님들의 밀도 있는 피드백과, 실제 서비스를 다루는 프로젝트 경험이 가장 좋았습니다. 다음 기수에도 꼭 추천하고 싶어요.</p>
          <div class="review-card__author">
            <span class="avatar"></span>
            <span>정민호</span>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ================= CURRICULUM ================= -->
  <section class="section curriculum" id="curriculum">
    <div class="wrap">
      <div class="curriculum__head">
        <div>
          <p class="eyebrow">프로젝트 AtoZ 리딩하는 능력</p>
          <h2>kt cloud의 실무 중심 체계적인 커리큘럼</h2>
        </div>
        <button class="btn btn--outline" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          상세 커리큘럼 다운로드
        </button>
      </div>

      <div class="accordion" id="curriculumAccordion">
        <div class="accordion__item is-open">
          <button class="accordion__trigger">
            <span class="accordion__step">1주차</span>
            <span class="accordion__label">통합 프로젝트 디자인과 관리</span>
            <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="accordion__panel">
            <p>디자인 프로세스 전반을 이해하고, 프로젝트 킥오프부터 관리까지의 흐름을 실습합니다.</p>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__trigger">
            <span class="accordion__step">2주차</span>
            <span class="accordion__label">최신 디자인 트렌드 사용자 리서치</span>
            <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="accordion__panel">
            <p>사용자 인터뷰, 설문 설계 등 리서치 방법론을 배우고 최신 UX 트렌드를 분석합니다.</p>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__trigger">
            <span class="accordion__step">3주차</span>
            <span class="accordion__label">기본 프로젝트 시작</span>
            <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="accordion__panel">
            <p>정보 구조 설계와 와이어프레임 제작을 통해 개인 프로젝트를 본격적으로 시작합니다.</p>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__trigger">
            <span class="accordion__step">4주차</span>
            <span class="accordion__label">심화 프로젝트 시작 및 제작</span>
            <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="accordion__panel">
            <p>고해상도 프로토타입 제작과 디자인 시스템 구축을 진행합니다.</p>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__trigger">
            <span class="accordion__step">5주차</span>
            <span class="accordion__label">실무 통합 프로젝트 시작</span>
            <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="accordion__panel">
            <p>실제 기업 과제를 바탕으로 팀 단위 통합 프로젝트를 시작합니다.</p>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__trigger">
            <span class="accordion__step">6주차</span>
            <span class="accordion__label">실무 통합 프로젝트 집중 개발</span>
            <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="accordion__panel">
            <p>팀 프로젝트를 고도화하며 멘토 피드백을 반영한 반복 개선을 진행합니다.</p>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__trigger">
            <span class="accordion__step">7주차</span>
            <span class="accordion__label">프로젝트 마무리, 최종 발표 및 수료</span>
            <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="accordion__panel">
            <p>최종 결과물을 발표하고 리뷰를 거쳐 과정을 수료합니다.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= BENEFITS ================= -->
  <section class="section benefits" id="benefits">
    <div class="wrap">
      <div class="section-head">
        <h2>챌린저를 위해 제공하는 혜택</h2>
        <p class="section-sub">kt cloud는 몰입도 있는 학습을 중요시해요.</p>
      </div>

      <div class="benefit-grid">
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="gift"></div>
          <h4>웰컴 키트 제공</h4>
          <p>KT Cloud Tech up 과정에 참여해주신 모든 수강생들을 위한 웰컴 키트 제공해드립니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="building"></div>
          <h4>오프라인 교육장</h4>
          <p>오프라인 협업으로 몰입도 200% 실전 같은 팀 프로젝트가 펼쳐집니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="globe"></div>
          <h4>메타버스 교육장</h4>
          <p>현실을 뛰어넘는 메타버스 기반 몰입형 학습 경험을 제공합니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="users"></div>
          <h4>네트워킹 파티</h4>
          <p>혼자가 아닌 연결의 힘으로 성장의 속도를 높이세요.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="cloud"></div>
          <h4>프로젝트 맞춤형 실습 인프라 지원</h4>
          <p>클라우드 실습 및 과제 수행에 필요한 최적의 구동 환경과 리소스를 제공합니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="spark"></div>
          <h4>생성형 AI 도구 지원</h4>
          <p>AI와 함께라면 학습이 더 빠르고 똑똑해집니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="book"></div>
          <h4>인프런 강의 지원</h4>
          <p>챌린저의 빠른 성장을 위해 1개월 간 인프런 강의를 무제한으로 지원합니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="target"></div>
          <h4>직군별 실전 역량 테스트 지원</h4>
          <p>각 직군별 맞춤형 모의 테스트(코딩 테스트, 실무 과제 등)를 통해 실력을 검증하고 한 단계 도약하세요. (※ 개발 직군은 모의 코딩 테스트 지원)</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="coin"></div>
          <h4>훈련 장려금 제공</h4>
          <p>성장의 밑거름으로 월 최대 300,000원의 훈련장려금이 지급됩니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon" data-icon="laptop"></div>
          <h4>고성능 실무용 노트북 대여</h4>
          <p>기기 성능 걱정 없이 교육에만 몰입할 수 있도록, 프로젝트 수행에 최적화된 고사양 노트북 대여 서비스를 제공합니다.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= FAQ ================= -->
  <section class="section faq" id="faq">
    <div class="wrap">
      <div class="faq__head">
        <h2>자주 묻는 질문</h2>
        <button class="faq__toggle-all" id="faqToggleAll" aria-label="전체 펼치기/접기">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 15l6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>

      <div class="faq-list" id="faqList">
        <!-- items injected via loop below -->
      </div>
    </div>
  </section>

</main>

<!-- ================= FOOTER ================= -->
<footer class="footer">
  <div class="wrap">
    <a href="#top" class="logo logo--footer" aria-label="kt cloud TECH UP">
      <svg class="logo__svg" width="108" height="30" viewBox="0 0 108 30" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="10" font-family="Pretendard, sans-serif" font-weight="800" font-size="11" fill="#17181B">kt</text>
        <text x="15" y="10" font-family="Pretendard, sans-serif" font-weight="600" font-size="11" fill="#FE2E36">cloud</text>
        <text x="0" y="27" font-family="Pretendard, sans-serif" font-weight="800" font-size="21" letter-spacing="-0.5" fill="#17181B">TECH UP</text>
      </svg>
    </a>

    <div class="footer__cols">
      <div class="footer__col">
        <h5>웹 개발</h5>
        <ul>
          <li>kt cloud 풀스택</li>
          <li>kt cloud 프론트엔드</li>
          <li>kt cloud 백엔드</li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>인프라 / 혁신 기술</h5>
        <ul>
          <li>kt cloud 생성형 AI</li>
          <li>kt cloud 사이버 보안</li>
          <li>kt cloud 클라우드 인프라</li>
          <li>kt cloud 클라우드 네이티브</li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>프로덕트 전문가</h5>
        <ul>
          <li>kt cloud 프로덕트 디자인</li>
          <li>kt cloud 프로덕트 매니지먼트</li>
        </ul>
      </div>
    </div>

    <p class="footer__copy">© kt cloud. All rights reserved.</p>
  </div>
</footer>

<script src="./js/main.js"></script>
</body>
</html>
