src/
├── app/ # 앱 진입점, 네비게이션, 전역 설정
│ ├── App.tsx # 루트 컴포넌트
│ ├── navigation/ # 네비게이션 관련
│ │ ├── index.ts # 네비게이션 셋업
│ │ └── types.ts # 네비게이션 타입 정의
│ └── providers/ # 전역 context/provider 모음 (ThemeProvider, AuthProvider 등)
│ └── index.ts
│
├── pages/ # 라우터에서 직접 사용되는 페이지 컴포넌트
│ ├── LoginPage/ # 페이지 단위 폴더
│ │ ├── index.tsx # 페이지 컴포넌트 (UI 조립, feature 조합)
│ │ └── styles.ts # 페이지 스타일 (필요 시)
│ └── HomePage/
│ ├── index.tsx
│ └── styles.ts
│
├── processes/ # 여러 feature/엔티티 조합한 비즈니스 플로우, 서비스 계층
│ └── authProcess.ts # 예: 로그인, 회원가입 흐름 구현
│
├── features/ # 단일 기능 단위 (로그인, 회원가입, 프로필 등)
│ └── login/ # 로그인 feature 예시
│ ├── api/ # 서버 API 호출 함수
│ │ └── loginApi.ts
│ ├── model/ # 상태관리 (zustand, recoil 등)
│ │ └── loginStore.ts
│ ├── ui/ # 순수 UI 컴포넌트
│ │ ├── LoginForm.tsx
│ │ └── LoginButton.tsx
│ ├── hooks/ # 커스텀 훅
│ │ └── useLoginLogic.ts
│ ├── lib/ # feature 내 보조 유틸 함수
│ │ └── validation.ts
│ ├── consts/ # 상수 모음
│ │ └── errorMessages.ts
│ ├── config/ # 구성값 (API 엔드포인트, 환경설정 등)
│ │ └── config.ts
│ ├── index.ts # feature 외부 진입점 (export 정리)
│ └── types.ts # 타입 정의
│
├── entities/ # 도메인 모델, 재사용 가능 상태/유틸
│ └── user/ # 사용자 엔티티 예시
│ ├── api/
│ │ └── userApi.ts
│ ├── model/
│ │ └── userStore.ts
│ ├── lib/
│ │ └── userHelpers.ts
│ ├── consts/
│ ├── config/
│ ├── types.ts
│ └── index.ts
│
├── shared/ # 재사용 컴포넌트, 스타일, 유틸, 훅 등
│ ├── components/ # 버튼, 입력창, 모달 등 UI 컴포넌트
│ │ ├── Button.tsx
│ │ └── Input.tsx
│ ├── hooks/ # 공통 커스텀 훅
│ │ └── useDebounce.ts
│ ├── utils/ # 공통 유틸 함수
│ │ └── formatDate.ts
│ ├── styles/ # 공통 스타일, 테마
│ │ ├── colors.ts
│ │ └── typography.ts
│ ├── constants/ # 공통 상수
│ │ └── appConstants.ts
│ └── config/ # 전역 설정 (env 등)
│ └── env.ts
│
└── index.tsx # RN 앱 엔트리 포인트
