# 타입 적용해보기

## ✍🏻 컨벤션

- 파일명은 PascalCase
- 폴더명은 kebob-case
- props 가 필요한 컴포넌트는 props 의 type 을 정의한 `{컴포넌트명}.type.ts` 파일을 가짐.

## 타입 시스템 실습 사항
- React.FC
  - 컴포넌트 props 의 타입을 선언부에 함께 명시
- PropsWithChildren => `Button`
  - children 속성을 자동으로 부여
- Generic => `useArray`
  - hook 에서 다룰 타입을 외부에서 주입받도록 설계
- TypeGuard => `useArray`
  - 파라미터 type 에 따라 분기  