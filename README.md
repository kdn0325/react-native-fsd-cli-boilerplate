# React Native FSD CLI Boilerplate

React Native 앱을 Feature-Sliced Design (FSD) 구조로 빠르게 시작할 수 있도록 만든 CLI 보일러플레이트입니다.  
TypeScript, React Navigation, Zustand 등 최신 기술 스택을 적용하였고,  
유지보수 및 확장성을 고려한 폴더 구조를 갖추고 있습니다.

---

## 주요 특징

- React Native + TypeScript 기반
- Feature-Sliced Design 아키텍처 적용 (FSD)
- React Navigation 기반 화면 전환 및 라우팅
- Zustand를 활용한 상태 관리 (선택적)
- API 호출, 상태 모델, UI, 훅, 상수 등 레이어별 명확한 구분
- CLI로 템플릿 생성 및 빠른 프로젝트 시작 지원
- Expo 및 React Native CLI 템플릿 지원

---

## 폴더 구조

```
src
├── app
│ ├── navigation # React Navigation 관련 설정
│ ├── providers # Context, Provider 등
│ └── App.tsx # 앱 엔트리 컴포넌트
│
├── pages
│ ├── LoginPage # 페이지 단위 컴포넌트 (route 단위)
│ │ └── index.tsx
│ └── HomePage
│ └── index.tsx
│
├── processes # 복잡한 비즈니스 로직 및 프로세스 (비동기 처리 등)
│ └── authProcess.ts # 로그인/로그아웃 등 프로세스 예시
│
├── features
│ └── login # 로그인 feature 단위
│ ├── api # 서버 API 호출 함수
│ ├── model # 상태 관리 (Zustand 등)
│ ├── ui # 화면 구성용 컴포넌트 (폼, 버튼 등)
│ ├── hooks # 커스텀 훅
│ ├── lib # 유틸, helper 함수
│ ├── consts # 상수
│ └── config # 설정 값 (환경변수 등)
│
├── entities
│ └── user # 도메인 엔티티
│ ├── api
│ ├── model
│ ├── lib
│ ├── consts
│ └── config
│
├── shared # 재사용 컴포넌트 및 공용 리소스
│ ├── components # 버튼, 입력 등 UI 컴포넌트
│ ├── hooks # 공용 커스텀 훅
│ ├── utils # 유틸 함수 모음
│ ├── styles # 공용 스타일 (테마, 색상 등)
│ ├── constants # 공용 상수
│ └── config # 공용 설정 (예: 환경변수)
│
├── assets # 이미지, 폰트, 아이콘 등 정적 리소스
└── index.ts # 진입점 (App 등록 등)

```

## 설치 및 시작 방법

### 1. 프로젝트 생성

```bash
npx create-react-native-fsd my-app --template=react-native
# 또는 Expo 템플릿
npx create-react-native-fsd my-app --template=expo
```

### 2. 의존성 설치
