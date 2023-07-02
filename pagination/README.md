# This project is a simple Pagination application built with React and TypeScript

- `src`

  - `hooks` : Custom hooks를 관리
  - `pages`: 페이지들을 관리하는 폴더

    - `pagination`: Pagination 페이지와 관련된 모든 코드 관리하는 폴더

      - `Container`: 상태 관리와 같은 비즈니스 로직을 처리하는 Container 를 관리하는 폴더

      - `Views`: 주로 UI와 관련된 로직을 처리할 Container 내부에 들어갈 View 컴포넌트들을 관리하는 폴더

      - `hooks`: 커스텀 훅들을 관리하는 폴더

  - `provider` : Provider를 관리하는 폴더
    - `recoil` : Recoil Provider
  - `types`: Pagination 사용되는 타입 관리
    - `index.ts`: 타입 정의들
  - `styles` : CSS파일들을 관리
    - `GlobalStyle.tsx` : Global하게 적용할 CSS 파일
  - `App.tsx`: 최상위 컴포넌트
  - `index.tsx`: 애플리케이션의 진입점
