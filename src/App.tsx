import type { ReactNode } from "react";
import itclipsOverview from "./assets/ITClips_Service.png";
import itclipsChat from "./assets/ITClips_Chat.png";
import itclipsNotification from "./assets/ITClips_Alarm.png";
import mobipayAuto from "./assets/MobiPay_AndroidAuto.jpg";
import mobipayDemo from "./assets/MobiPay_Demo.jpg";
import phishingGuard from "./assets/PhishingGuard_Composite.png";
import pieSearch from "./assets/Pie_Search.jpg";
import pieCompare from "./assets/Pie_Compare.jpg";
import pieChat from "./assets/Pie_Chat.jpg";
import playx4Booth from "./assets/PlayX4_Exhibit.jpg";
import playx4Gameplay from "./assets/PlayX4_Play.jpg";
import solveacStreak from "./assets/SolveAC_789_Streak.png";

const TOTAL_PAGES = 11;

function Page({
  page,
  section,
  children,
  className = "",
}: {
  page: number;
  section: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`page ${className}`}>
      <div className="page-top">
        <span>{section}</span>
        <span>
          {String(page).padStart(2, "0")} / {TOTAL_PAGES}
        </span>
      </div>
      <div className="page-body">{children}</div>
      <div className="page-rule" />
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

function Title({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  return <div className={compact ? "title compact" : "title"}>{children}</div>;
}

function Meta({
  items,
}: {
  items: { label: string; value: ReactNode }[];
}) {
  return (
    <div className="meta-grid">
      {items.map((item) => (
        <div className="meta-item" key={item.label}>
          <div className="micro">{item.label}</div>
          <div className="meta-value">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

function Card({
  label,
  title,
  children,
  accent = "navy",
  className = "",
}: {
  label?: string;
  title?: ReactNode;
  children?: ReactNode;
  accent?: "navy" | "mint" | "blue" | "red";
  className?: string;
}) {
  return (
    <div className={`card accent-${accent} ${className}`}>
      {label && <div className="micro">{label}</div>}
      {title && <div className="card-title">{title}</div>}
      {children && <div className="card-copy">{children}</div>}
    </div>
  );
}

function Flow({
  items,
  className = "",
}: {
  items: { name: string; detail?: string }[];
  className?: string;
}) {
  return (
    <div className={`flow ${className}`}>
      {items.map((item, index) => (
        <div className="flow-part" key={`${item.name}-${index}`}>
          <div className="flow-node">
            <div className="flow-name">{item.name}</div>
            {item.detail && <div className="flow-detail">{item.detail}</div>}
          </div>
          {index < items.length - 1 && <div className="arrow">→</div>}
        </div>
      ))}
    </div>
  );
}

function Step({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="step">
      <div className="micro">{label}</div>
      <div className="step-copy">{children}</div>
    </div>
  );
}

function App() {
  return (
    <main className="portfolio">
      <Page page={1} section="SOFTWARE ENGINEER PORTFOLIO" className="cover">
        <div className="cover-identity">
          <div className="cover-name">김세진</div>
          <div className="cover-role">Software Engineer | Web Frontend</div>
        </div>

        <div className="cover-statement">
          <div className="cover-accent" />
          <div>
            <Title>
              사용자 경험과 데이터 흐름을 연결하는
              <br />
              <strong>Web Frontend Developer</strong>
            </Title>
            <div className="lead">
              React·TypeScript·Vue 기반 웹 개발과 상태 관리 경험을 바탕으로,
              <br />
              API 연동부터 사용자 인터페이스와 서비스 안정성까지 고려해 구현합니다.
            </div>
          </div>
        </div>

        <div className="cover-capabilities">
          {[
            ["01", "WEB FRONTEND", "React · TypeScript · Vue 기반 사용자 화면 구현"],
            ["02", "STATE & INTERACTION", "Zustand · Pinia · WebSocket · SSE 상태 관리와 실시간 UI"],
            ["03", "API & AUTHENTICATION", "REST API 연동 · 인증 흐름과 토큰 생명주기 이해"],
            ["04", "SYSTEM & STABILITY", "시스템 연동 · 아키텍처 개선 · 장애 분석과 운영"],
          ].map(([number, title, detail], index) => (
            <div className={`capability ${index === 0 || index === 3 ? "filled" : ""}`} key={number}>
              <div className="capability-number">{number}</div>
              <div className="micro">{title}</div>
              <div className="capability-copy">{detail}</div>
            </div>
          ))}
        </div>

        <div className="contact-line public-project-link">
          <a href="https://github.com/tpwls30" target="_blank" rel="noopener noreferrer">
            github.com/tpwls30
          </a>
        </div>
      </Page>

      <Page page={2} section="ENGINEERING PROFILE">
        <Eyebrow>CORE COMPETENCIES</Eyebrow>
        <Title>
          웹 화면부터 데이터 흐름까지,
          <br />
          사용자가 경험하는 기능을 구현하는 개발자
        </Title>
        <div className="lead">
          React·Vue 기반 웹 서비스를 개발하며 상태 관리와 비동기 통신을 경험했고,
          <br />
          필요에 따라 인증·Backend·시스템 연동까지 이해의 범위를 넓혀왔습니다.
        </div>

        <div className="competency-grid">
          {[
            ["01", "WEB FRONTEND", "React · TypeScript · Vue · Zustand · Pinia · Responsive UI"],
            ["02", "API & AUTHENTICATION", "REST API · WebSocket/STOMP · SSE · MobiPay(Android) Kakao OAuth · Refresh Token"],
            ["03", "SYSTEM & ARCHITECTURE", "Modular Architecture · Dependency Inversion · Debugging · Lifecycle Management"],
            ["04", "BACKEND & INTEGRATION", "Python · FastAPI · Django REST Framework · MySQL · Docker Compose · Linux · MQTT · Cloudflare Tunnel"],
          ].map(([number, heading, copy]) => (
            <Card key={number} label={number} title={heading}>
              {copy}
            </Card>
          ))}
        </div>

        <div className="section-row">
          <Eyebrow>PROJECT INDEX</Eyebrow>
          <div className="muted">웹 FE 구현 경험을 시작으로 시스템 연동·문제 해결 경험까지</div>
        </div>
        <div className="project-index">
          {[
            ["01 · p.03", "ITClips", "React · TypeScript · Zustand · Real-time UI"],
            ["02 · p.04", "파이", "Vue · Pinia · API · Product Comparison"],
            ["03 · p.05–06", "MobiPay", "Android · Authentication · Architecture"],
            ["04 · p.07", "피싱가드", "Native Integration · Debugging · Stability"],
            ["05 · p.08", "스마트팜", "Real-time Data · WebSocket · Infrastructure"],
            ["06 · p.09", "Gecko House", "IoT Automation · Local LLM / MCP PoC"],
            ["EXP · p.10", "금오산특공대", "PlayX4 · User Feedback · Product Improvement"],
          ].map(([page, name, detail]) => (
            <div className="index-item" key={name}>
              <div className="index-page">{page}</div>
              <div>
                <div className="index-name">{name}</div>
                <div className="muted">{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </Page>

      <Page page={3} section="PROJECT 01 · ITCLIPS" className="itclips-page">
        <Eyebrow>WEB FRONTEND · STATE MANAGEMENT · REAL-TIME UI</Eyebrow>
        <Title>
          사용자 서비스에
          <br />
          실시간 상호작용을 연결
        </Title>
        <div className="lead">
          북마크를 정리·공유하는 큐레이팅 SNS에서 UI/UX와 모바일 레이아웃을 구현하고, 채팅과 알림의
          통신 방식을 역할에 따라 분리했습니다.
        </div>
        <Meta
          items={[
            { label: "PERIOD", value: "2024.07.08 – 2024.08.16" },
            {
              label: "ROLE / CONTRIBUTION",
              value: (
                <>
                  UI/UX · 모바일 반응형 레이아웃 · Zustand 상태 관리
                  <br />· WebSocket 실시간 채팅 · SSE 실시간 알림
                </>
              ),
            },
            { label: "STACK", value: "React · TypeScript · Zustand · WebSocket / STOMP · SSE" },
          ]}
        />
        <div className="itclips-layout">
          <div className="overview-shot">
            <div className="shot-label"><span>SERVICE OVERVIEW</span></div>
            <img src={itclipsOverview} alt="ITClips 서비스 전체 화면" />
            <div className="image-caption">
              북마크를 정리·공유하고 로드맵으로 구성하는 북마크 기반 큐레이팅 SNS
            </div>
          </div>
          <div className="evidence-column">
            <div className="evidence-shot">
              <img src={itclipsChat} alt="ITClips 실시간 채팅 화면" />
              <div>
                <Eyebrow>LIVE CHAT · WEBSOCKET / STOMP</Eyebrow>
                <div className="evidence-copy">양방향 실시간 채팅의 메시지 흐름과 상태를 UI에 반영</div>
              </div>
            </div>
            <div className="evidence-shot">
              <img src={itclipsNotification} alt="ITClips 실시간 알림 화면" />
              <div>
                <Eyebrow>LIVE NOTIFICATION · SSE</Eyebrow>
                <div className="evidence-copy">
                  댓글·좋아요·스크랩·팔로우 등 서버 이벤트를 실시간 알림으로 전달
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="engineering-story">
          <Step label="PROBLEM / GOAL">콘텐츠를 공유하는 사용자 간 즉각적인 상호작용이 필요한 서비스</Step>
          <Step label="MY CONTRIBUTION">
            UI/UX와 모바일 레이아웃을 설계하고, 실시간 채팅·알림 상태를 사용자 화면에 연결
            <br /><strong className="fact-text">Zustand로 로그인 사용자 정보와 채팅 메시지 상태를 관리했습니다.</strong>
          </Step>
          <Step label="TECHNICAL DECISION">
            상호작용 특성에 따라 WebSocket / STOMP와 SSE로 통신 방식을 분리
          </Step>
        </div>
        <div className="frontend-proof-band">
          <div><b>FRONTEND STATE</b><span>Zustand · 로그인 사용자 정보 · 채팅 메시지</span></div>
          <div><b>REAL-TIME CHAT</b><span>WebSocket / STOMP · 양방향 통신</span></div>
          <div><b>REAL-TIME NOTIFICATION</b><span>SSE · 서버 이벤트를 실시간 알림으로 전달</span></div>
        </div>
        <div className="small-note">
          검색 · 실시간 인기순위 · 프로필 설정 · 팔로우 관리 등 사용자 페이지 구현 · Desktop / Mobile
          반응형 UI 설계
        </div>
      </Page>

      <Page page={4} section="PROJECT 02 · 파이" className="pie-page">
        <Eyebrow>WEB FRONTEND · STATE MANAGEMENT · API INTEGRATION</Eyebrow>
        <Title>
          금융상품 정보를
          <br />
          탐색과 비교가 가능한 경험으로 구성
        </Title>
        <div className="lead">
          Vue와 Django REST Framework로 금융상품 서비스를 구현하고, 공통 금융 데이터를 AI 기반
          탐색과 Chart.js 비교 기능으로 연결했습니다.
        </div>
        <Meta
          items={[
            { label: "PERIOD", value: "2024.05.19 – 2024.05.24" },
            {
              label: "ROLE / CONTRIBUTION",
              value: "웹 서비스 구현 · Pinia 상태 관리 · 외부 API/데이터 연동 · Generative AI Integration",
            },
            {
              label: "STACK",
              value:
                "Vue · Pinia · Django REST Framework · 금융감독원 Open API · OpenAI API · Custom Prompt · Chart.js",
            },
          ]}
        />
        <div className="pie-layout">
          <div className="pie-evidence-gallery" aria-label="파이 서비스의 실제 금융상품 탐색, 비교 및 AI 채팅 화면">
            <figure className="pie-evidence-shot">
              <div className="shot-label"><span>FINANCIAL PRODUCT SEARCH</span></div>
              <img src={pieSearch} alt="파이 금융상품 목록과 예적금 검색 실제 화면" />
              <figcaption className="image-caption">금융상품 탐색 · 금융감독원 Open API</figcaption>
            </figure>
            <figure className="pie-evidence-shot">
              <div className="shot-label"><span>PRODUCT COMPARISON</span></div>
              <img src={pieCompare} alt="파이 금융상품 Chart.js 비교 차트 실제 화면" />
              <figcaption className="image-caption">선택 상품 비교 · Chart.js</figcaption>
            </figure>
            <figure className="pie-evidence-shot pie-chat-shot">
              <div className="shot-label"><span>AI ASSISTANT</span></div>
              <img src={pieChat} alt="파이 OpenAI API 기반 금융상품 챗봇 실제 화면" />
              <figcaption className="image-caption">OpenAI API 기반 상품 탐색</figcaption>
            </figure>
          </div>
        </div>
        <div className="pinia-state">
          <div className="pinia-header"><Eyebrow>FRONTEND STATE · VUE + PINIA</Eyebrow><span>상품 검색 조건 · 선택한 금융상품</span></div>
          <div className="pinia-copy">Pinia로 금융상품 검색 조건과 사용자가 선택한 금융상품의 상태를 관리했습니다.</div>
        </div>
        <div className="shared-workflow">
          <div className="shared-source">
            <Eyebrow>SHARED DATA SOURCE</Eyebrow>
            <div className="source-node">금융감독원 Open API</div>
            <div className="vertical-arrow">↓</div>
            <div className="source-node strong">금융상품 Database</div>
          </div>
          <div className="workflow-branch" aria-hidden="true">
            <div className="branch-stem" />
            <div className="branch-bar" />
            <div className="branch-drop branch-drop-left">↓</div>
            <div className="branch-drop branch-drop-right">↓</div>
          </div>
        </div>
        <div className="dual-workflow">
          <Card label="01 · AI EXPLORATION" title="사용자 질문 → 상품 탐색">
            <div className="mini-flow">
              사용자 질문 → 관련 상품 정보 조회 → Custom Prompt → OpenAI API → 답변 / 상품 탐색
            </div>
          </Card>
          <Card label="02 · PRODUCT COMPARISON" title="상품 선택 → 시각적 비교" accent="mint">
            <div className="mini-flow">상품 선택 → DB 상품 정보 조회 → 상품 비교 → Chart.js 시각화</div>
          </Card>
        </div>
        <div className="split-message">
          <strong>공통 DB를 활용한 두 가지 상품 탐색·비교 흐름</strong>
        </div>
      </Page>

      <Page page={5} section="PROJECT 03 · MOBIPAY">
        <Eyebrow>PRODUCT · SYSTEM INTEGRATION · ANDROID</Eyebrow>
        <Title>
          운전 중 직접 결제해야 하는 불편에서
          <br />
          차량 안에서 이어지는 결제 경험으로
        </Title>
        <div className="lead">
          실제 운전 중 겪은 불편을 팀과 공유하고, 별도 조작을 줄이면서 결제 상태를 확인할 수 있는
          흐름을 Android와 Android Auto로 구현했습니다.
        </div>
        <Meta
          items={[
            { label: "PERIOD", value: "2024.08.19 – 2024.10.11" },
            {
              label: "ROLE / CONTRIBUTION",
              value: "Android Tech Leader · Android 파트 리딩 · AI 서버 통신(클라이언트) · Android Auto · 서비스 상태 UI · 멀티모듈 구조 개선 · 카카오 OAuth 로그인·토큰 갱신",
            },
            { label: "STACK", value: "Kotlin · Android · Jetpack Compose · FCM · WebRTC · BLE · Android Auto" },
          ]}
        />

        <div className="driver-problem">
          <Eyebrow>PROBLEM SOURCE · DRIVER EXPERIENCE</Eyebrow>
          <div className="driver-context">
            MobiPay 기획 단계에서 운전 경험이 있는 팀원들과 각자가 실제 운전 중 겪었던 결제 불편을
            공유했습니다.
          </div>
          <div className="driver-pains">
            <div>브레이크를 밟은 상태에서 결제를 위해 팔을 뻗기 어려움</div>
            <div>주유소 등에서 카드 전달을 위해 창문을 열어야 함</div>
            <div>더운 날 시동을 끄고 창문을 열면 차량 내부 냉기가 빠르게 사라짐</div>
          </div>
        </div>

        <div className="panel primary-flow">
          <div className="panel-head">
            <Eyebrow>TEAM SERVICE FLOW</Eyebrow>
            <div className="muted">서비스 전체 흐름</div>
          </div>
          <Flow
            items={[
              { name: "Merchant Camera", detail: "번호판 촬영" },
              { name: "AI Server / OCR", detail: "차량 번호 인식" },
              { name: "Vehicle / Account", detail: "차량 · 계정 매칭" },
              { name: "Merchant POS", detail: "상품 선택 · 결제 요청" },
              { name: "Android Mobile", detail: "결제 처리 · 상태 수신" },
              { name: "Android Auto", detail: "결제 진행 상태 표시" },
            ]}
          />
        </div>

        <div className="mobipay-execution">
          <div className="product-image mobipay-visuals">
            <div className="mobipay-gallery">
              <figure><img src={mobipayAuto} alt="Android Auto 결제 요청 및 지도 화면" /><figcaption>Android Auto 결제 요청 화면</figcaption></figure>
              <figure><img src={mobipayDemo} alt="차량 인식과 서비스 연동 실제 화면" /><figcaption>차량 인식·서비스 연동 화면</figcaption></figure>
            </div>
          </div>
          <div className="execution-stack">
            <Card
              label="DECISION"
              title={
                <>
                  Android Auto를{" "}
                  <span style={{ whiteSpace: "nowrap", wordBreak: "keep-all" }}>
                    사용자 경험의
                  </span>{" "}
                  한 축으로 선택
                </>
              }
            >
              운전 중 별도 조작을 줄이고 결제 상태를 차량 안에서 확인할 수 있도록 모바일 경험을
              Android Auto까지 확장했습니다.
            </Card>
            <Card label="MY CONTRIBUTION" title="Android 파트 리딩" accent="blue">
              AI 서버 통신(클라이언트) · Android Mobile · Android Auto · 결제 상태 UI · 멀티모듈 구조 개선
              <br /><strong className="fact-text">카카오 OAuth 로그인 · Refresh Token 기반 토큰 갱신</strong>
            </Card>
            <div className="metric-strip">
              <strong>0.8s</strong>
              <span>Android Auto 평균 화면 전환 시간</span>
            </div>
          </div>
        </div>

        <div className="experience-path">
          DRIVER EXPERIENCE → COMMON PROBLEM → ANDROID AUTO DECISION → IMPLEMENTATION → ACTUAL VEHICLE
          DEMO → USER EXPERIENCE FEEDBACK
        </div>
        <div className="field-note">
          <strong>RESULT · ACTUAL VEHICLE DEMO</strong>
          <span>실제 차량 시연에서 창문을 열지 않고 운전에 집중할 수 있다는 평가를 받았습니다.</span>
        </div>
        <div className="auth-note">
          <Eyebrow>AUTHENTICATION · KAKAO OAUTH & TOKEN RENEWAL</Eyebrow>
          <span>카카오 OAuth 로그인을 구현하고 Refresh Token을 활용해 Access Token이 자동 갱신되도록 구성했습니다.</span>
        </div>
      </Page>

      <Page page={6} section="PROJECT 03 · MOBIPAY / ARCHITECTURE">
        <Eyebrow>SOFTWARE ARCHITECTURE · PROBLEM SOLVING</Eyebrow>
        <Title>
          순환 의존성을
          <br />
          단방향 구조로 개선
        </Title>
        <div className="lead">
          멀티모듈 구성의 MobiPay에서 firebase·main·common 모듈 사이에 발생한 순환 의존성을
          <br />
          공통 인터페이스와 Dependency Inversion으로 분리해 단방향 의존 구조를 확보했습니다.
        </div>

        <div className="architecture-steps">
          <Step label="PROBLEM">
            기능 모듈 간 직접 참조 증가로
            <br />
            순환 의존 발생
          </Step>
          <Step label="ANALYSIS">
            FCMService가 기능 구현에 직접 의존해
            <br />
            모듈 간 결합도 증가
          </Step>
          <Step label="SOLUTION">
            공통 인터페이스와 Dependency Inversion 적용
            <br />· MobiPayApplication에서 객체 연결
          </Step>
          <Step label="RESULT">
            기능 모듈 직접 의존 제거
            <br />· 단방향 의존 구조 확보
          </Step>
        </div>

        <div className="before-after">
          <div className="diagram before-diagram">
            <Eyebrow>BEFORE · CIRCULAR DEPENDENCY</Eyebrow>
            <div className="cycle-diagram">
              <svg viewBox="0 0 220 226" aria-hidden="true">
                <circle className="cycle-loop" cx="110" cy="113" r="82" />
              </svg>
              <div className="cycle-module cycle-firebase">firebase</div>
              <div className="cycle-module cycle-common">common</div>
              <div className="cycle-module cycle-main">main</div>
            </div>
            <div className="diagram-note">
              firebase · common · main 모듈 간 직접 참조로
              <br />
              순환 의존 발생
            </div>
          </div>

          <div className="diagram after-diagram">
            <Eyebrow>AFTER · MANUAL WIRING</Eyebrow>
            <div className="arch-stack">
              <div className="arch-node">
                <strong>FCMService</strong>
                <span>firebase module</span>
              </div>
              <div className="down-link">↓ uses shared interface</div>
              <div className="arch-node highlighted">
                <strong>FCMDependencyProvider</strong>
                <span>common · shared interface</span>
              </div>
              <div className="up-link">↑ provider implementation / application wiring</div>
              <div className="arch-node">
                <strong>MobiPayApplication</strong>
                <span>main · manual wiring</span>
              </div>
              <div className="branch-line">↓</div>
              <div className="implementations">
                <div>PaymentOperations<br />/ Repository</div>
                <div>MemberInvitationOperations<br />/ Repository</div>
              </div>
            </div>
          </div>
        </div>

        <div className="architecture-result">
          공통 인터페이스와 Dependency Inversion으로 <strong>모듈 간 직접 의존을 제거</strong>
        </div>

        <div className="auxiliary-grid">
          <Card label="AUXILIARY COMMUNICATION" title="WebRTC · 음성 통신">
            운전 중 주의 분산을 줄이면서 사용자와 점주가 실시간으로 소통할 수 있도록 음성 통신
            흐름을 별도로 연결했습니다.
          </Card>
          <Card label="MEMBER INVITATION" title="BLE · 주변 사용자 기반 초대" accent="mint">
            BLE는 주변 사용자 기반 회원 초대에 사용했으며, 전화번호 기반 초대도 지원했습니다.
          </Card>
        </div>
      </Page>

      <Page page={7} section="PROJECT 04 · 피싱가드" className="phishing-page">
        <Eyebrow>OPEN SOURCE INTEGRATION · DEBUGGING · STABILITY</Eyebrow>

        <Title>
          Native 네트워크 처리 구조를 서비스에 맞게 수정하고
          <br />
          JNI부터 Android까지 실행 흐름을 안정화
        </Title>

        <Meta
          items={[
            { label: "PERIOD", value: "2025.12.03 – 운영중" },
            {
              label: "ROLE / CONTRIBUTION",
              value:
                "Android 앱 개발 · 오픈소스 기반 네트워크 처리 구조 수정·통합 · 비동기 크래시 분석 · 메모리 최적화",
            },
            {
              label: "STACK",
              value: "Java · Android · VpnService · zdtun · nDPI · JNI / Native C",
            },
          ]}
        />

        <div className="case-heading"><Eyebrow>SECTION A · 비동기 화면 진입 크래시 해결</Eyebrow></div>
        <div className="phishing-layout">
          <div className="network-flow">
            <Eyebrow>NETWORK PROCESSING FLOW · OPEN SOURCE BASED</Eyebrow>

            {[
              "Network Traffic",
              "VpnService / TUN",
              "JNI Boundary",
              "Native C · zdtun + nDPI",
              "Protocol Detection",
              "JNI Result Return",
              "Android Application / UI",
            ].map((item, index, array) => (
              <div className="vertical-flow-part" key={item}>
                <div className="vertical-node">{item}</div>
                {index < array.length - 1 && (
                  <div className="vertical-arrow">↓</div>
                )}
              </div>
            ))}
          </div>

          <div className="troubleshooting">
            <Step label="PROBLEM">
              알림을 통한 Fragment 진입 시 비동기 크래시
            </Step>

            <Step label="ANALYSIS">
              LeakCanary로 객체 생명주기와 메모리 누수를 점검하고,
              Logcat으로 예외 발생 시점과 비동기 실행 흐름 추적
            </Step>

            <Step label="ROOT CAUSE">
              데이터 로딩 완료 전 변수 접근
            </Step>

            <Step label="RESULT">
              데이터 준비 시점과 화면 접근 순서를 조정해 크래시 해결
            </Step>
          </div>

          <div className="phishing-shot">
            <img src={phishingGuard} alt="피싱가드 실제 Android 화면" />
          </div>
        </div>

        <div className="case-heading memory-heading"><Eyebrow>SECTION B · 메모리 최적화</Eyebrow>
          <span>LeakCanary로 확인한 Fragment·animation 관련 누수와 Android 생명주기 처리를 함께 개선했습니다.</span>
        </div>
        <div className="memory-panel">
          <div className="memory-metrics">
            <div>
              <div className="micro">BEFORE</div>
              <strong>약 100 MB</strong>
            </div>
            <div className="memory-arrow" aria-hidden="true">→</div>
            <div>
              <div className="micro">AFTER</div>
              <strong>약 80 MB</strong>
            </div>
          </div>
          <div className="memory-result">
            <div className="micro">COMBINED RESULT</div>
            <p>메모리 누수 및 생명주기 개선 등을 포함한 전체 최적화 결과 · 최대 메모리 사용량 약 20% 감소</p>
          </div>
        </div>

        <div className="clarification">
          <div className="micro">OPEN SOURCE BASE · MODIFICATION SCOPE</div>

          <div className="clarification-copy">
            PCAPdroid 기반 Native 네트워크 처리 구조와 zdtun·nDPI를 활용하고,
            프로젝트에 불필요한 MITM·Blacklist 기능을 제거해 피싱가드의 동작 방식에 맞게 수정했습니다.
 
          </div>
        </div>
      </Page>

      <Page page={8} section="PROJECT 05 · 스마트팜" className="smartfarm-page">
        <Eyebrow>IOT · DATA · SERVICE INFRASTRUCTURE</Eyebrow>
        <Title>
          방치와 과습 사이,
          <br />
          다육이 상태를 데이터로 관찰
        </Title>
        <Meta
          items={[
            { label: "PERIOD", value: "2026.05.23 – 진행중" },
            {
              label: "ROLE / CONTRIBUTION",
              value:
                "사용자 기능·서비스 인프라 · WebSocket/FastAPI 통신 · Linux/Docker Compose/Cloudflare Tunnel 구성",
            },
            {
              label: "STACK",
              value:
                "Arduino · WebSocket · FastAPI · Database · Linux · Docker Compose · Cloudflare Tunnel",
            },
          ]}
        />

        <div className="problem-context smartfarm-context">
          <Eyebrow>PROBLEM / CONTEXT</Eyebrow>
          <div>
            다육 식물은 너무 방치하면 상태가 나빠지고, 반대로 지나치게 관리하면 과습 문제가 생길 수
            있습니다. 친구와 함께 일반 사용자가 식물 상태를 계속 직접 확인하지 않아도 데이터로 변화를
            확인할 수 있는 환경을 기획했습니다.
          </div>
        </div>

        <div className="panel smartfarm-flow">
          <div className="panel-head">
            <Eyebrow>CURRENT IMPLEMENTATION · EVERY 2 SECONDS</Eyebrow>
            
          </div>
          <Flow
            items={[
              { name: "SENSORS", detail: "온도 · 습도\n토양 습도 · 조도" },
              { name: "ARDUINO", detail: "Sensor Collection" },
              { name: "WEBSOCKET", detail: "Real-time Data Transmission" },
              { name: "FASTAPI / LINUX", detail: "Docker Compose" },
              { name: "DATABASE", detail: "2초 주기 저장" },
              { name: "HISTORY QUERY", detail: "이전 상태 조회" },
            ]}
          />
        </div>

        <div className="smartfarm-decision">
          <Card label="WHY 2 SECONDS?" title="가장 느린 센서에 수집 주기를 맞춤">
            모든 센서 중 가장 느린 센서가 안정적으로 값을 수집하는 주기가 약 2초였고, 센서 간 DB
            timestamp를 일관되게 맞추기 위해 전체 수집 주기를 2초로 통일했습니다.
          </Card>
          <Card label="COLLECTED DATA" title="4개 환경 데이터" accent="blue">
            온도 · 습도 · 토양 습도 · 조도를 지속적으로 저장하고 과거 상태를 조회할 수 있습니다.
          </Card>
        </div>

        <div className="three-up smartfarm-infra">
          <Card label="COMMUNICATION DECISION" title="MQTT → WebSocket">
            초기에는 IoT 통신에 적합한 MQTT를 고려했습니다. 하지만 Cloudflare Tunnel을 통한 공개
            HTTP(S) 기반 접근 구조에서 raw MQTT를 그대로 사용하기 어려웠습니다. 외부 접근 구조를
            유지하면서 실시간 센서 데이터를 전달할 수 있도록 WebSocket으로 변경했습니다.
          </Card>
          <Card label="INFRASTRUCTURE DECISION" title="기존 장비를 서버로 활용" accent="blue">
            별도 클라우드 서버를 사용하지 않고 기존 노트북을 Linux 서버로 활용했습니다. Docker
            Compose로 실행 환경을 구성하고, Cloudflare Tunnel을 통해 외부 접근 경로를 확보했습니다.
          </Card>
          <Card label="RESULT" title="지속 수집과 이력 조회" accent="mint">
            실제 다육이 화분에서 온도·습도·토양습도·조도 데이터를 2초 주기로 지속적으로 축적하고,
            이전 상태를 조회할 수 있는 환경을 구성했습니다.
          </Card>
        </div>

        <div className="ai-next-step">
          <strong>향후 확장 검토 · AI</strong>
          <span>식물의 이상 상태를 이미지로 판단하는 기능을 검토하기 위해 현재 이상 이미지 데이터를 수집하고 있습니다.</span>
        </div>
      </Page>

      <Page page={9} section="PROJECT 06 · GECKO HOUSE" className="gecko-page">
        <Eyebrow>IOT AUTOMATION · OPERATION · LOCAL LLM EXTENSION</Eyebrow>
        <Title>
          도마뱀의 스트레스를 줄이기 위해
          <br />
          사람의 개입을 자동화
        </Title>
        <div className="lead">
          실제 사육 경험에서 반복 확인의 부담을 발견하고, 환경 유지 자동화부터 센서 데이터의
          자연어 조회까지 단계적으로 확장했습니다.
        </div>
        <Meta
          items={[
            {
              label: "PERIOD",
              value: (
                <div className="period-stack">
                  <span>
                    <strong>Gecko House</strong>
                    2026.04.20 – 진행중
                  </span>
                  <span>
                    <strong>Local LLM & MCP Extension</strong>
                    2026.10.01 – 진행중
                  </span>
                </div>
              ),
            },
            {
              label: "ROLE / CONTRIBUTION",
              value: "IoT 자동화 구현 · MQTT/FastAPI 연동 · Local LLM/MCP Technical PoC",
            },
            {
              label: "STACK",
              value: "Arduino · Raspberry Pi · MQTT · FastAPI · Python · Qwen · Ollama · MCP",
            },
          ]}
        />

        <div className="problem-context gecko-context">
          <Eyebrow>PROBLEM / CONTEXT</Eyebrow>
          <div>
            조카에게 도마뱀을 받아 사육을 시작했습니다. 사육 후기를 확인하면서 잦은 핸들링이나
            사육장을 계속 들여다보고 건드리는 행동이 스트레스가 될 수 있다는 점을 알게 됐고, 사람이
            자주 개입하지 않아도 환경을 일정하게 유지하도록 자동화를 시작했습니다.
          </div>
        </div>

        <div className="panel gecko-automation">
          <div className="panel-head">
            <Eyebrow>GECKO CARE AUTOMATION</Eyebrow>
            <div className="badge">THRESHOLD-BASED AUTO MODE</div>
          </div>
          <Flow
            items={[
              { name: "TEMP / HUMIDITY", detail: "환경 센서" },
              { name: "ARDUINO", detail: "센서 수집" },
              { name: "RASPBERRY PI", detail: "MQTT · FastAPI" },
              { name: "THRESHOLD CHECK", detail: "온습도 임계치" },
              { name: "AUTO MODE", detail: "조건별 동작" },
            ]}
          />
          <div className="gecko-output">
            <div>VENTILATION FAN<br /><span>환기</span></div>
            <div>WATER PUMP<br /><span>환경 유지</span></div>
            <div className="notification-output">HIGH TEMP / HUMIDITY → PUSH NOTIFICATION</div>
          </div>
        </div>

        <div className="two-up gecko-decisions">
          <Card label="DECISION" title="IoT 상태 전달에 MQTT 적용">
            Arduino와 Raspberry Pi 서버 사이에서 기기 상태를 전달하는 구조에 적합하다고 판단해
            MQTT를 적용했습니다.
          </Card>
          <Card label="RESULT" title="반복 확인 부담을 자동화로 전환" accent="mint">
            임계치와 자동 모드를 설정하면 팬과 물 펌프가 조건에 따라 동작하고, 고온·고습은 푸시
            알림으로 확인해 사육장 내부 온도를 계속 직접 확인하는 부담을 줄였습니다.
          </Card>
        </div>

        <div className="extension-panel">
          <div className="panel-head">
            <Eyebrow>TECHNICAL EXTENSION · LOCAL LLM & MCP</Eyebrow>
            <div className="badge">현재 구현 범위 · 현재 온도 조회</div>
          </div>
          <div className="extension-copy">
            기존 센서 데이터를 자연어로 조회하는 연결 방식을 검증하기 위해 Qwen·Ollama와 MCP를 연동한
            Technical PoC를 구현했습니다.
          </div>
          <div className="extension-flow" role="img" aria-label="자연어 질문에서 Qwen Ollama, MCP Client, MCP Server, Gecko House 센서 데이터 조회를 거쳐 현재 온도를 반환하는 기술 PoC 흐름">
            <div className="mcp-flow-row">
              <div className="mcp-node">자연어 질문</div>
              <span className="mcp-arrow" aria-hidden="true">→</span>
              <div className="mcp-node">Qwen / Ollama</div>
              <span className="mcp-arrow" aria-hidden="true">→</span>
              <div className="mcp-node">MCP Client</div>
            </div>
            <div className="mcp-flow-turn" aria-hidden="true">↓</div>
            <div className="mcp-flow-row">
              <div className="mcp-node mcp-result-node">현재 온도 반환</div>
              <span className="mcp-arrow" aria-hidden="true">←</span>
              <div className="mcp-node">Gecko House Sensor Data</div>
              <span className="mcp-arrow" aria-hidden="true">←</span>
              <div className="mcp-node">MCP Server</div>
            </div>
          </div>
          <div className="extension-note">
            완성형 AI 플랫폼이 아닌, 기존 IoT 서비스와 Local LLM의 연결 방식을 검증하는 Technical PoC
          </div>
        </div>
      </Page>

      <Page page={10} section="EXPERIENCE · 금오산특공대" className="startup-page">
        <Eyebrow>GAME DEVELOPMENT · PLAYX4 · USER FEEDBACK</Eyebrow>
        <Title>
          플레이어의 반응을 현장에서 확인하고
          <br />
          다음 주 바로 제품에 반영
        </Title>
        <Meta
          items={[
            { label: "TEAM", value: "금오산특공대 · 게임 스타트업 초기 멤버" },
            { label: "PERIOD", value: "2025.01.01 – 2025.08.25" },
            { label: "ROLE", value: "Unity / C# Client Development · VFX" },
          ]}
        />

        <div className="playx4-gallery">
          <div className="booth-image">
            <div className="shot-label"><span>PLAYX4 EXHIBITION BOOTH</span></div>
            <img src={playx4Booth} alt="PlayX4 전시 부스 현장 사진" />
            <div className="image-caption">현장에서 플레이를 관찰하고 직접 피드백을 수집</div>
          </div>
          <div className="gameplay-image">
            <div className="shot-label"><span>PLAYABLE DEMO</span></div>
            <img src={playx4Gameplay} alt="PlayX4에서 시연한 실제 플레이 화면" />
            <div className="image-caption">PlayX4에서 시연한 실제 구현 결과물</div>
          </div>
        </div>

        <div className="feedback-loop">
          PLAYX4 EXHIBITION → PLAYER OBSERVATION → USER FEEDBACK → NEXT MONDAY TEAM REVIEW →
          IMPLEMENTATION → PRODUCT IMPROVEMENT
        </div>

        <div className="feedback-actions">
          <Card label="FEEDBACK 01" title="“발사 이펙트가 심심하다”">
            <strong>ACTION</strong>
            <span>더 빠른 템포로 발사되는 불 구체 VFX로 변경</span>
          </Card>
          <Card label="FEEDBACK 02" title="“게임 초반이 전체적으로 심심하다”" accent="blue">
            <strong>ACTION</strong>
            <span>초반 튜토리얼을 위한 시각적 이펙트 추가</span>
          </Card>
        </div>

        <div className="execution-note">
          <strong>EXECUTION</strong>
          <span>
            PlayX4 종료 후 다음 주 월요일, 팀원들이 현장에서 받은 피드백을 함께 정리하고 담당 영역별
            수정 사항을 바로 반영했습니다.
          </span>
        </div>
        <div className="delivery-line">
          PC 게임 2개 개발 참여 · PlayX4 전시 · Steam / STOVE 출시 과정 참여
        </div>
      </Page>

      <Page page={11} section="PROFILE" className="profile-page">
        <Eyebrow>SKILLS · EDUCATION · CERTIFICATIONS · AWARDS</Eyebrow>
        <Title compact>
          문제에 맞춰 확장해온
          <br />
          기술과 경험
        </Title>

        <div className="skills-list web-skills-list">
          {[
            ["01 · WEB FRONTEND", "React · TypeScript · Vue · Zustand · Pinia · Responsive UI"],
            ["02 · APPLICATION & AUTHENTICATION", "Java · Kotlin · Android · Jetpack Compose · C# · Unity · MobiPay Kakao OAuth · Refresh Token"],
            ["03 · BACKEND & DATA", "Python · FastAPI · Django REST Framework · MySQL · SQL · REST API"],
            ["04 · SYSTEM & ARCHITECTURE", "Linux · Docker · Docker Compose · Cloudflare Tunnel · MQTT · WebSocket/STOMP · SSE · Modular Architecture · Dependency Inversion · JNI / Native C · Debugging"],
            ["05 · AI APPLICATION", "OpenAI API · Custom Prompt · Qwen · Ollama · MCP · OCR Service Integration"],
            ["06 · COLLABORATION", "Git · Pull Request · Code Review · Jira · Notion · Slack · MatterMost"],
          ].map(([label, value]) => (
            <div className="skill-row" key={label}>
              <div className="micro">{label}</div>
              <div>{value}</div>
            </div>
          ))}
        </div>

        <div className="profile-columns">
          <div>
            <Eyebrow>EDUCATION & TRAINING</Eyebrow>
            <div className="education-list">
              <div>
                <strong>학점은행제</strong>
                <span>컴퓨터공학전공 · 2026.03 – 2027.02 (졸업예정)</span>
              </div>
              <div>
                <strong>Samsung Software Academy for Youth (SSAFY)</strong>
                <span>삼성 청년 SW 아카데미 · 총 1,600시간 · 2024.01 – 2024.12</span>
              </div>
              <div>
                <strong>42 Seoul</strong>
                <span>동료 학습 기반 소프트웨어 교육 과정 · 총 800시간 · 2022.09 – 2023.07</span>
              </div>
              <div>
                <strong>계명대학교</strong>
                <span>독일어문학전공 · 2015.03 – 2022.02</span>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>CODING PRACTICE</Eyebrow>
            <Card title="Java/Python 알고리즘 학습" className="practice-card">
              <span className="practice-description">solve.ac 문제 풀이</span>
              <figure className="streak-evidence">
                <img src={solveacStreak} alt="solve.ac 789일 연속 문제 풀이 기록 캡처" />
                <figcaption>789일 연속 풀이 기록</figcaption>
              </figure>
            </Card>
            <Eyebrow>CERTIFICATIONS & AWARDS</Eyebrow>
            <div className="awards-list">
              <div>01 · 정보처리기사</div>
              <div>02 · SQLD</div>
              <div>03 · SSAFY 1학기 성적 우수상</div>
              <div>04 · SSAFY 특화 프로젝트 우수상 · MobiPay</div>
            </div>
          </div>
        </div>

        <div className="closing">
          <div className="closing-line" />
          <div>
            문제를 이해하고 필요한 기술을 연결해
            <br />
            실제 동작하는 서비스로 완성하겠습니다.
          </div>
          <span>김세진 · Software Engineer</span>
        </div>
      </Page>
    </main>
  );
}

export default App;
