# React Type 종류
## React.FC

= **Functional Component**
- React + Typescript 조합으로 개발할 때 사용하는 타입
- 함수형 컴포넌트 사용 시 타입 선언에 쓸 수 있도록 react에서 제공하는 타입

- ```React.FC``` 를 사용하면 props 에 기본적으로 children이 들어간다.

```
interface TestFC {
    name : string,
    age: number
}
const TestReactFC : React.FC<TestFC> = ({name, age})=> {
    return (
        <>
        <h4>ReactFC 컴포넌트입니당</h4>
        <p>안녕하세요 저는 {name} 이고 {age} 살 입니당 </p>
        </>
    )
}
export default TestReactFC

```
위에 ```React.FC``` 를 사용하여 컴포넌트를 작성해보았다. 그렇다면 이걸 메인페이지에서 불러올 차례이다.
```
//mainpage에서 불러와보자
import TestReactFC from "../task4/reactFC"

const MainPage = ()=>{
    return (
        <>
        <div>
            <h2>React.FC 사용해보기</h2>
            <TestReactFC name= "wendy" age={26}/>
        </div>
        </>
    )
}
export default MainPage

```
그런데 ```React.FC```는 React 버전 18 이전까지 ```사용하는걸 지양``` 했다고 한다.
그 이유를 간단히 알아봤는데,,

1. 필수 속성 강제화
- ```React.FC```는 props가 빈 객체라도 필수로 넘겨져야한다는 제약이 있었다고 한다.
=> 필요한 props가 아니여도 빈객체를 넘겨야 사용가능함.
- 따라서 컴포넌트에 children 이 있을수 있다는 가정하에 언제든지 children의타입 지정 없이 전달이 가능 => 타입이 명확하지 않다.

2. children 타입의 제약
- ```React.FC``` 는 자동으로 ```children``` 속성이 포함되는데, React 18 버전 이전에는 JSX 요소를 강제로 반환해야했다.
=> 18 버전 이후에는 반환 요소가 ReactNode로 바뀌었다.


## ReactNode

= react 컴포넌트를 정의하는 타입 중 하나
- children 속성의 타입으로 가장 많이 사용되는 타입, 가장 넓은 범위를 가짐
- reactElement 를 포함하여 string, number, undefined 타입 등 JSX 내에서 사용할 수 있는 모든 타입을 포함한다.
- ```falsy``` 한 값을 리턴하면 아무것도 렌더링 하지 않는다.
- ReactChild 타입에 string, number 타입이 포함됨.
- type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

```
import { ReactNode } from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: #000;
  color: #fff;
`;

interface ReactNodee {
  children: ReactNode;
}

const TestReactNode = ({ children }: ReactNodee) => {
  return (
    <Box>
      <div>{children}</div>
    </Box>
  );
};

export default TestReactNode;
```
이렇게 컴포넌트를 생성하고 메인페이지에 나타내보았다,
```
import styled from "styled-components"
import TestReactFC from "../task4/reactFC"
import TestReactNode from "../task4/reactNode"

const MainPage = ()=>{
    return (
        <>
        <BorderBox>
            <h2>React.FC 사용해보기</h2>
            <TestReactFC name= "wendy" age={26}/>
        </BorderBox>
        <BorderBox>
            <h2>ReactNode 사용해보기</h2>
            <TestReactNode>
                <p>reactnode 사용중입니다</p>
            </TestReactNode>
        </BorderBox>
        </>

    )
}
export default MainPage

const BorderBox = styled.div`
border:2px solid #000;
width: 500px;
border-radius: 10px;
padding-bottom:10px;

`
```
![](https://velog.velcdn.com/images/hayoung78/post/443808a2-cc80-408e-8af5-20dbf7914ed3/image.png)

ReactNode의 같은 경우 예시로 사용하는 방법이 자세하게 나와있지않아서 (?내가 못찾은건가..) 저렇게 사용하는게 맞나 라는 생각이 들었다.

모든 타입을 반환할 수 있기때문에 저렇게 특별한 타입 지정 없이 {children} 으로 넘겨도 되는걸까..? 

=> 만약 타입을 지정했다면 그만큼 타입 안정성이 올라가겠지, 
=> 정해진 답은 없다고 한다. 저렇게 children으로 분리하여 전달해 줄 것인지, 그냥 type을 지정해서 분리할것인지를 고민하면 된다. 
(ex. title의 경우 string으로만 타입 지정-> 타입안정성 증가)

## ReactElement
- react 컴포넌트를정의하는 타입 중 하나인데 , ```string``` 과 ```number``` 타입등 ```원시적인 타입``` 은 포함하지 않는다. 
=> 아래 이미지와 같이 ReactNode 타입이 ReactElement 타입을 포함하고있다.

![](https://velog.velcdn.com/images/hayoung78/post/dfe37b40-d4de-4a42-b160-92a0df4f236f/image.png)

- createElemet로 ReactElement를 생성한다.
=>원시타입을 포함하지않는 이유


그렇다면 예제를 작성해보자
```
type ReactElementProps = {
    children: React.ReactElement
}

const TestReactElement = ({children}: ReactElementProps)=> {
    return (
        <>
        <div>{children}</div>
        </>
    )
};
export default TestReactElement
```

//mainpage
```
<BorderBox>
   <h2>ReactElement 사용해보기</h2>
   <TestReactElement>
    {/* reactElement 사용중입니다 => string 컴파일 에러*/}
     <p>reactElement 사용중입니다</p>
   </TestReactElement>
</BorderBox>
```
원시적인 요소를 받지 않는걸 확인해보고싶어서 같이 작성해보았다. 
(주석 처리된 부분이 string으로 작성 -> 에러가 뜬 부분이다.)


## PropsWithChildren
- 말그대로 "children 을 가진 props타입" 을 의미한다.
- 타입스크립트로 개발된 리액트컴포넌트에서 ```children```을 명시적으로 사용하고 싶을때 사용된다.
```
import { PropsWithChildren } from "react"

type propsWithChildren = PropsWithChildren<{
title:string,
name?:string,
age?:number
}>

const TestPropsWithChildren = (props : propsWithChildren)=> {
    const {title, name,age,children} = props
    return(
        <div>
        <p>{title}</p>
        {name && <p>Name: {name}</p>}
        {age && <p>Age: {age}</p>}
        {children}
        </div>
    )
}
export default TestPropsWithChildren
```
mainpage에 적용해보자
```
//mainPage.tsx
<BorderBox>
  <h2>propsWithChildren 사용해보기</h2>
  <TestPropsWithChildren title="propsWithChildren" name="wendy" age={26}>
  </TestPropsWithChildren>
</BorderBox>
```