# Elice Programming Assingnment

[elice-PA 배포링크](https://my-blog-4v4sg8x0e-rmdnps10.vercel.app/?isFare=false&isFree=false)

## 🚀 사용한 기술 스택

- `React`, `Typescript` 기반으로 구현
- ajax Library: **`axios`**
- state management: **`recoil`**
- style: **`styled-components`**
- package-manger: `npm`
- code formatter: `Prettier`, `ESLINT`

## 디렉토리 구조

<img width="179" alt="스크린샷 2024-02-05 오전 7 27 30" src="https://github.com/rmdnps10/elice-PA/assets/87219998/b32a0252-824a-437b-8d54-a1313754a410">

- api : axios 인스턴스를 생성합니다.
- assets : 프로젝트에 필요한 정적 파일을 보관합니다.
- components : `App.tsx`에서 하나의 페이지를 이루는 여러 컴포넌트를 보관합니다.
  - molecules : molecules 안에 있는 폴더들은 컴포넌트들은 하나의 기능을 담당하는 역할을 하며, components 직전 하위 요소로 들어가 있는 컴포넌트들의 경우엔 molecules의 상위 집합이자, 페이지의 **섹션** 단위로 분리하였습니다.
- hook : 프로젝트에 사용한 커스텀 훅을 보관합니다.
- state: atom으로 선언해준 전역 상태를 보관합니다.
- style: 프로젝트에 전역으로 적용한 스타일을 보관합니다.
- util: 그 외에 유용한 함수, 타입 선언, 맵핑에 필요한 객체 등을 보관합니다.




## 구현 사진 
(1200px 이상)
  <img width="1587" alt="스크린샷 2024-02-05 오전 8 14 35" src="https://github.com/rmdnps10/elice-PA/assets/87219998/1574768b-1f9d-4e7c-98a0-d741c5ddcfcc">

  (1200px 이하)
  <img width="1026" alt="스크린샷 2024-02-05 오전 8 15 33" src="https://github.com/rmdnps10/elice-PA/assets/87219998/f53d3739-39a3-4997-946b-b199bf937b1d">




## 기능 정리

- 페이지 마크업의 경우 Elice의 공식 홈페이지를 최대한 모방하였습니다.

- 제공받은 엔드포인트를 통해 axios를 통한 api 연동을 하여 특정한 `course`의 제목, 상세정보, 가격, 할인가격, 할인비율, 그리고 배경 이미지를 매핑하였습니다. 홈페이지와 동일하게 이미지가 `null`인 경우 예외처리를 구현하였습니다.

- 페이지에 접속 시 자동으로 queryString이 설정되어 API 요청을 하고, 쿼리의 값에 따라 필터의 on/off 가 반영되게 구현하여 URL이 바껴도 필터가 유지되도록 구현하였습니다.

- 페이지네이션을 구현하였으며, `window.scrollTopto` 를 통해 실제 홈페이지처럼 페이지가 바뀔 때 카드 리스트의 첫 부분에 스크롤이 오게 구현하였습니다.

- `ResultCard`의 폭 조정과 section 단위 컴포넌트들의 padding 조절을 통해 `background-image` 가 과도하게 잘리지 않게 구현함으로써 반응형 스타일을 구현하였습니다.

- `useDebounce` 훅을 통하여 텍스트필드의 `onChnage` 이벤트가 발생할 때마다 api 요청을 `trigger`하지 않고, 마지막 변화에서 api 요청을 하도록 구현하였습니다.

- 검색 결과가 없을 시 나오는 view를 구현하였습니다.

## 시연 영상
