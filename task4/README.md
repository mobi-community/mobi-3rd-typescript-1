# React Type 정리하기

## 1. React.FC
  - FC는 Functional Component의 약어이다.
  - React 함수형 컴포넌트를 정의하기 위한 타입이다.
  - 다음과 같이 함수형 컴포넌트의 props 타입을 지정할 수 있다. (제네릭)
    ```typescript
    interface ChildrenProps {
      propOne: string,
      propTwo: number
    }

    const TestComponent: React.FC<ChildrenProps> = ({ propOne, propTwo }) => {
      // 컴포넌트의 로직
    }
    ```

  - React 18 버전 이전에는 `React.FC` 타입이 명시된 함수는 JSX 요소 를 반환하도록 강제했기 때문에, 다른 타입 (`number` , `string` , `undefined` 등) 을 반환할 경우 오류가 발생했다.
  
  > 이후에는 `React.FC` 의 반환 타입을 `React.ReactElement` 에서 `React.ReactNode` 로 변경했다. (다양한 타입이 반환될 수 있도록 개선되었다.)
    

  - `React.FC` 타입이 명시된 함수는 props 에 children 이 자동을 포함되었다.
    ```typescript
    const Button: React.FC = () => {
      return <button>눌러라.!</button>;
    };
    export const App = () => {
      <Button>버튼</Button>; // 오류 ❌, `Button` props 가 없어도 `React.FC` 가 children 포함시켰다.
    };
    ```
  > 18버전 부터 children 을 명시하지 않은 경우, 오류를 발생시킨다.

### 🤔 개인의견
- 👎 타입으로 명시해주지 않아도, 폴더구조/이름 등 컨벤션에 따라 컴포넌트임을 확인할 수단이 많은데 굳이 사용해야 할까?
- 👍 props 타입을 확인할 수 있는 건 확실히 장점이 맞는 것 같다. 하지만 아래와 같이 작성할 수도 있으니, `React.FC` 만의 장점은 아닌 것 같다.

  ```typescript
  import React from 'react';

  interface FCTestProps{}

  // React.FC 사용 ⭕️
  const FCTestComponent1:FC<FCTestProps> = (props) => {
    // 컴포넌트 로직
  }

  // React.FC 사용 ❌
  interface FCTestProps{}
  const FCTestComponent2 = (props: FCTestProps) => {
    // 컴포넌트 로직
  }
  ```

----
<br/>
<br/>

## 2. ReactNode
- React 컴포넌트를 정의하는 타입이다.
- 함수형 컴포넌트의 반환 타입일 뿐만 아니라, 클래스형 컴포넌트의 render() 가 반환하는 타입이기도 하다. 
- 해당 타입을 부여된 컴포넌트는 children 가 **자동으로 부여되지 않는다.**
- `string`, `number`, `undefined`, `null` 타입 등 JSX 내에서 사용할 수 있는 모든 타입을 포함한다. 


### 🤔 개인의견
- 👎 TypeScript를 사용하는 주된 이유 중 하나는 정적 타입 검사를 통해 코드의 안정성을 높이는 것 => `ReactNode` 를 사용하면 TypeScript 의 이점을 사라지지 않나?

```typescript

interface ReactNodeTestProps {
  children: ReactNode
}

const ReactNodeTestComponent = ({children}: ReactNodeTestProps) => {
  // children 타입이 JSX.Element? string? number?
}

```

----
<br/>
<br/>

## 3. ReactElement
- React 컴포넌트를 정의하는 타입이다.
- `string`, `number` 등을 포함하지 않고 jsx 요소 를 허용한다.
- createElement (ReactElement 를 생성하는 메서드) 의 반환 타입이다. 
=> 원시타입을 포함하지 않는 이유 이다.
- 해당 타입을 부여된 컴포넌트는 children 가 **자동으로 부여된다.**

----
<br/>
<br/>

## 4. PropsWithChildren
- React 컴포넌트의 속성(props)에 children 속성이 포함되어 있음을 나타내는 데 사용한다.
- `PropsWithChildren` 를 사용할 경우, 다음의 컴포넌트 props 에 children 이 포함되어 있음을 나타낼 수 있다.
```typescript
// `PropsWithChildren` 적용 ❌
interface PWChTestProps1{
  propOne: string
  propTwo: number
  children: ReactNode
}
const PWChTestComponent1 = (props: PWChTestProps1) => {
  // 컴포넌트의 로직
}
```

```typescript
// `PropsWithChildren` 적용 ⭕️
interface PWCTestProps2{
  propOne: string
  propTwo: number
}
const PWCTestComponent2 = (props: PropsWithChildren<PWCTestProps2>) => {
  // 컴포넌트의 로직
   return (
    <div>
      {/** view */}
      {props.children}
    </div>
  );
}
```
### 🤔 개인의견
- 👍 children 은 부모 컴포넌트에서 전달하는 방법부터 다른 props 와 구별되기 때문에, `PropsWithChildren` 를 이용하는 편이 좋은 것 같다.
- 👎 위의 예시처럼, 확실히 제네릭이 포함된 타입 사용시 코드가 길고 장황해지는 것 같다.

----
<br/>
<br/>

## 5. PropsWithRef

- 컴포넌트에 전달될 props 에 ref 객체가 포함된 경우, 해당 타입을 부여한다.

```typescript
interface PWRTestInputProps{
  // props
}

/** input 컴포넌트 */
const PWRTestInput = (props: PropsWithRef<PWRTestInputProps, HTMLInputElement>) => {
  return <input ref={props.ref} />;
}

/** input 호출 컴포넌트 */
const PWRTComponent = () => {
  const inputRef = useRef<HTMLInputElement>()
  return (
    <div>
      <PWRTestInput ref={inputRef}/>
    </div>
  )
}
```


### 🤔 개인의견
- 👍 ref props 받는다는 것을 명시적으로 다루는 것이 좋다고 생각한다.
- forwardRef() 사용한다면 해당 타입 없이도, 위와 같은 기능을 하는 코드를 작성할 수 있다.

```typescript
interface PWRTestInputProps {
  // props
}

/** input 컴포넌트 */
const PWRTestInput = forwardRef<HTMLInputElement, PWRTestInputProps>((props, ref) => {
  return <input ref={ref} />;
});

/** input 호출 컴포넌트 */
const PWRTComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <PWRTestInput ref={inputRef} />
    </div>
  );
};
```

- 각각 사용할 때를 구분해봤을 때,
  - props 의 타입을 재사용한다면, `PropsWithRef` 를 사용하여 타입을 정의하겠다.
  - 그게 아니라면, forwardRef() 메서드를 사용해서 직접 ref 객체를 받겠다.


----
<br/>
<br/>

## 6. RefObject 

- 컴포넌트의 리랜더링에 상관없이 값을 유지하는 reference 객체 타입이다.

- 'useRef()' 의 반환타입 중 하나이다.
  - 'useRef' 에 대한 정의는 3개이다.
  - `RefObject` 타입을 반환하는 경우는 초기값이 null 인데, 제네릭에 전달된 타입은 이와 다른 경우이다.
  - 이 때, 'current' 속성 값을 변경하는 것이 금지된다. (단, 'current' 하위의 속성을 변경하는 것은 가능하다.)
  - DOM 요소를 직접 조작하기 위한 용도로 주로 사용한다.
```ts
const SomeComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null); // 초기값 null, RefObject type 반환
  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // 'current' 변경 불가, 그 하위 property 변경 가능.!
    }
  };
  return (
    <>
      <button onClick={handleButtonClick}>Clear</button>
      <input ref={inputRef}/>
    </>
  )
}
```

### MutableRefObject
- 'useRef()' 의 'current' 속성에 저장하려는 값의 타입을 미리 지정해주어야 한다.
- 'current' 의 값을 수정할 수 있다.
- 컴포넌트의 리랜더링과 상관없이, 값을 저장하기 위한 용도로 주로 사용한다.
```typescript
const saveNumberRef : MutableRefObject<number> = useRef<number>(0); //  초기값의 타입 == number, MutableRefObject type 반환
```

----
<br/>
<br/>

## 7. SetStateAction

- 상태값을 새로 업데이트하는 함수 (가령, useState, useReducer, useContext 등) 의 타입이다.

> ```tsx
> type SetStateAction<S> = S | ((prevState: S) => S);
> ```

```tsx
const [count,setCount] = useState(0)
/**
 * (생략)
 */

setCount(5) // 1. 값만 넘겨주는 경우 , SetStateAction<number>

setCount((prevState)=>prevState+1) // 2. 이전상태를 기반한 변경 함수를 주는 경우, SetStateAction<(prevState: number) => number>

```

----
<br/>
<br/>

## 8. Dispatch
- 상태변경함수를 제네릭으로 받아 void 를 리턴해주는 함수 타입
- props 로 상태변경함수를 전달해야 할 경우, 사용된다.

```tsx
interface CounterButtonProps{
  setCountUp: Dispatch<SetStateAction<number>>
}

const CounterButton = (props: CounterButtonProps) => {
  return(
    <button onClick={() => props.setCountUp((prev) => prev + 1)}>+1</button>
  )
}

const CounterComponent = (props: DTestProps) => {
  const [count,setCount] = useState(0)
  return(
    <>
      <h1>{count}</h1>
      <CounterButton setCountUp={setCount}/>
    </>
  )
}

```

----
<br/>
<br/>

## 9. MouseEvent, ChangeEvent, FormEvent, HTML<>Element (HTMLDivElement, ...etc)
- DOM 이벤트 핸들러나 요소 등을 정의하기 위한 타입
- MouseEvent 
  - 마우스 이벤트를 나타내는 타입
  - 클릭, 이동, 드래그 등의 마우스 동작과 관련된 정보가 선언되어있다.
- ChangeEvent
  - 입력 요소의 값이 변경될 때 발생하는 이벤트를 나타내는 타입
- FormEvent
  - HTML 폼에서 발생하는 이벤트를 나타내는 타입
  - 주로 <form> 요소에 사용되며, 폼 전송(submit), 잘못된 입력(validation) 등과 관련된 정보 가진다.
- HTML<>Element
  - HTML 요소에 대한 제네릭 타입
  - HTMLDivElement는 `<div>` 요소를 나타내는 타입이고, HTMLAnchorElement는 `<a>` 요소를 나타낸다.
  - 해당 요소가 가지는 속성과 메서드를 정의한다.
      


