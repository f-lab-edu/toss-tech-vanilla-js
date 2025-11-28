# 🚀 Toss Tech - Vanilla JS SPA

> 프레임워크 없이 바닐라 자바스크립트(TypeScript)로 구현한 [toss.tech](https://toss.tech/tech) 기술 블로그 클론 프로젝트

![toss](https://github.com/f-lab-edu/toss-tech-vanilla-js/assets/110542210/99b3f765-600b-4fce-8900-e4d2ac98753a)

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [핵심 구현 사항](#-핵심-구현-사항)
- [시작하기](#-시작하기)
- [스크립트](#-스크립트)
- [참고 자료](#-참고-자료)

## 🎯 프로젝트 소개

React, Vue 같은 프레임워크 없이 순수 JavaScript와 Web API만을 사용하여 SPA(Single Page Application)를 구현한 프로젝트입니다.
토스 기술 블로그의 UI/UX를 클론하면서, 프론트엔드 프레임워크의 내부 동작 원리를 이해하는 것을 목표로 합니다.

### 학습 목표

- **History API**를 활용한 클라이언트 사이드 라우팅 구현
- **Web Components (Custom Elements)**를 활용한 컴포넌트 기반 아키텍처 구현
- **Shadow DOM**을 활용한 스타일 캡슐화
- 프레임워크 없이 **상태 관리**와 **렌더링 시스템** 이해하기

## ✨ 주요 기능

| 기능                      | 설명                                        |
| ------------------------- | ------------------------------------------- |
| 🔄 **SPA 라우팅**         | History API 기반 클라이언트 사이드 라우팅   |
| 📦 **컴포넌트 시스템**    | Custom Elements 기반 재사용 가능한 컴포넌트 |
| 🎨 **스타일 캡슐화**      | Shadow DOM을 활용한 컴포넌트 스타일 격리    |
| 📱 **카테고리 분류**      | 개발(Tech) / 디자인(Design) 아티클 분류     |
| 📄 **아티클 상세 페이지** | 동적 라우팅을 통한 아티클 상세 조회         |
| 🔗 **딥 링크 지원**       | 새로고침 시에도 라우트 상태 유지            |

## 🛠 기술 스택

### Core

- **TypeScript** - 타입 안정성 확보
- **Web Components API** - Custom Elements, Shadow DOM
- **History API** - 클라이언트 사이드 라우팅

### Build Tools

- **Webpack 5** - 모듈 번들링
- **ts-loader** - TypeScript 컴파일
- **css-loader / style-loader** - CSS 처리

### Development

- **Jest** - 단위 테스트
- **Babel** - JavaScript 트랜스파일링
- **http-server** - 개발 서버

## 📁 프로젝트 구조

```
toss-tech-vanilla-js/
├── __test__/                    # 테스트 파일
│   └── router/
│       └── router.test.ts       # 라우터 테스트
├── dist/                        # 빌드 결과물
├── src/
│   ├── apis/                    # API 호출 함수
│   │   ├── getArticle.ts        # 아티클 상세 조회
│   │   ├── getArticleList.ts    # 아티클 목록 조회
│   │   └── index.ts
│   ├── components/              # 재사용 컴포넌트
│   │   ├── article/             # 아티클 관련 컴포넌트
│   │   │   ├── ArticleDetail.ts
│   │   │   ├── ArticleList.ts
│   │   │   ├── ArticleListItem.ts
│   │   │   └── ArticleProfile.ts
│   │   ├── layout/              # 레이아웃 컴포넌트
│   │   │   ├── footer.ts
│   │   │   └── header.ts
│   │   ├── Component.ts         # 베이스 컴포넌트 클래스
│   │   └── entry.ts             # 컴포넌트 엔트리
│   ├── constants/
│   │   └── customElementName.ts # Custom Element 이름 상수
│   ├── data/                    # 목업 데이터 (JSON)
│   │   ├── article.json
│   │   ├── designArticleList.json
│   │   └── techArticleList.json
│   ├── pages/                   # 페이지 컴포넌트
│   │   ├── ArticleDetailPage.ts
│   │   ├── MainPage.ts
│   │   ├── NotFoundPage.ts
│   │   └── index.ts
│   ├── styles/                  # 전역 스타일
│   │   ├── global.css
│   │   └── reset.css
│   ├── types/                   # TypeScript 타입 정의
│   │   ├── article.d.ts
│   │   ├── index.ts
│   │   └── router.d.ts
│   ├── index.html               # HTML 템플릿
│   ├── index.ts                 # 애플리케이션 진입점
│   └── router.ts                # SPA 라우터
├── package.json
├── tsconfig.json
├── webpack.config.js
└── jest.config.js
```

## 🔑 핵심 구현 사항

### 1. SPA 라우터

History API를 활용한 클라이언트 사이드 라우터를 직접 구현했습니다.

```typescript
// 라우터 사용 예시
const router = createRouter();

router
  .addRoute("/", pages.main)
  .addRoute("/tech", pages.main)
  .addRoute("/design", pages.main)
  .addRoute("/article/:articleId", pages.article) // 동적 라우팅
  .setNotFound(pages.notFound)
  .start();
```

**주요 특징:**

- 메서드 체이닝 패턴 지원
- 동적 URL 파라미터 추출 (`:articleId`)
- 정규표현식 기반 라우트 매칭
- `popstate` 이벤트 기반 네비게이션 감지
- 폴링 방식으로 URL 변경 감지 (250ms 간격)

### 2. 컴포넌트 시스템

Web Components의 Custom Elements를 확장한 베이스 컴포넌트를 구현했습니다.

```typescript
// 베이스 컴포넌트 클래스
export default class Component extends HTMLElement {
  constructor(attributes: string[]) {
    super();
    this.attachShadow({ mode: "open" });
    // props 초기화 및 네비게이션 이벤트 바인딩
  }

  get styles() {
    return "";
  } // 컴포넌트 스타일
  createHTML(props: Props): HTMLElement; // 렌더링 로직
  render() {
    /* Shadow DOM에 렌더링 */
  }
}
```

**주요 특징:**

- Shadow DOM을 통한 스타일 캡슐화
- `data-navigate` 속성을 통한 선언적 네비게이션
- 라이프사이클 메서드 (`connectedCallback`)
- Props 시스템 (HTML 속성 기반)

### 3. 선언적 네비게이션

`data-navigate` 속성을 사용하여 SPA 네비게이션을 구현했습니다.

```html
<!-- 클릭 시 /tech로 네비게이션 -->
<a href="/tech" data-navigate="/tech">개발</a>
```

컴포넌트 내부에서 이벤트 위임 패턴으로 처리:

```typescript
this.shadowRoot!.addEventListener(
  "click",
  (e) => {
    const anchor = target.closest("a[data-navigate]");
    if (anchor && anchor.dataset.navigate) {
      e.preventDefault();
      router.navigate(anchor.dataset.navigate);
    }
  },
  true
);
```

### 4. 컴포넌트 목록

| 컴포넌트        | 태그명                | 설명               |
| --------------- | --------------------- | ------------------ |
| Header          | `<app-header>`        | 상단 네비게이션 바 |
| Footer          | `<app-footer>`        | 하단 푸터          |
| MainPage        | `<main-page>`         | 메인 페이지        |
| ArticleList     | `<article-list>`      | 아티클 목록        |
| ArticleListItem | `<article-list-item>` | 아티클 목록 아이템 |
| ArticleDetail   | `<article-detail>`    | 아티클 상세        |
| ArticleProfile  | `<article-profile>`   | 작성자 프로필      |

## 🚀 시작하기

### 사전 요구사항

- Node.js 18+
- Yarn 1.22+

### 설치 및 실행

```bash
# 의존성 설치
yarn install

# 개발 서버 실행 (http://localhost:8001)
yarn dev
```

### 프로덕션 빌드

```bash
# Webpack 빌드만 실행
npx webpack
```

## 📜 스크립트

| 스크립트    | 설명                                        |
| ----------- | ------------------------------------------- |
| `yarn dev`  | Webpack 빌드 후 개발 서버 실행 (port: 8001) |
| `yarn test` | Jest 테스트 실행                            |

## 🧪 테스트

라우터 핵심 기능에 대한 단위 테스트가 포함되어 있습니다.

```bash
yarn test
```

**테스트 항목:**

- URL 파라미터 추출 (`extractUrlParams`)
- 라우트 매칭 및 콜백 실행
- NotFound 핸들링

## 📚 참고 자료

- 📖 [프레임워크 없는 프론트엔드 개발](https://www.yes24.com/Product/Goods/96639825) - Francesco Strazzullo
- 🔗 [toss-tech-router](https://github.com/f-lab-edu/toss-tech-router) - 관련 프로젝트
- 📝 [MDN - Web Components](https://developer.mozilla.org/ko/docs/Web/API/Web_components)
- 📝 [MDN - History API](https://developer.mozilla.org/ko/docs/Web/API/History_API)
