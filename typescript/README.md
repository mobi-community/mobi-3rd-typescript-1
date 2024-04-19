# Task4

## 1. React.FC

### React 18버전 이전까지 FC 사용을 지양했던 이유와 이제 다시 사용할 수 있는 이유는 무엇일까?

FC는 자동으로 props에 children을 optional로 포함하고 있는데 타입스크립트는 정확한 타입지정을 해주는 것인데 이에 반하는 동작 이기때문에 지양했습니다. 또한 이전에 defaultProps의 동작에 이슈가 존재했습니다.

가독성면에서도 코드가 좀더 길어지는 면이있습니다.

```JS
const test1 : React.FC<TestType> = (prop)=>{}
const test2 = (prop : TestType)=>{ }
```

React18 버전이 업데이트되면서 더이상 FC자체로는 children을 props로 포함하지 않도록 수정되었습니다.

또한 이전 버전에서는 React.FC의 반환타입이 ReactElement로 한정되어 있어서 다른타입을 반환할 경우 오류를 발생시켰지만 18버전으로 바뀌며 반환타입이 ReactNode로 변경되며 오류를 더이상 발생시키지 않습니다.

따라서 이전에 문제가되었던 타입의 안정성을 확보했기때문에 다시 사용해도 문제가 없을 것 같습니다.

### 만약 FC를 사용할 수 없는 환경이라면 이유는 무엇이고 어떻게 대처가 가능한가

FC를사용할 수 없는 환경이라면 아마도 팀원들과의 컨밴션 이나 프로젝트 요구사항에 맞지 않아서 사용 못할 경우가 있을것이라 생각됩니다.

FC를 사용할 수 없다면 직접 props에 타입을 작성해주는 방법으로 대체 할 수 있습니다.

```JS
// expamle
import React, { PropsWithChildren } from "react"

interface PropTypes {
  title: string
}

export const Test = ({ title, children }: PropsWithChildren<PropTypes>) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

```

## ReactNode

랜더링 가능한 모든것을 포함하는 타입. string, number, JSXElement등등 ...

```JS
import { ReactNode } from "react"
interface PropTypes {
  content: ReactNode
}
export const Test = ({ content }: PropTypes) => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  )
}
```

## ReactElement

JSXElement 를 반환하는 컴포넌트의 타입을 나타냄

```JS
import { ReactElement, ReactNode } from "react"

interface PropTypes {
  content: ReactNode
}

export const Test = ({ content }: PropTypes): ReactElement => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  )
}

```

## PropsWithChildren

props타입에 자동으로 children을 추가해줌

```JS
import { PropsWithChildren, ReactElement, ReactNode } from "react"

interface PropTypes {
  content: ReactNode
}
export const Test = ({
  content,
  children,
}: PropsWithChildren<PropTypes>): ReactElement => {
  return (
    <div>
      <h1>{content}</h1>
      {children}
    </div>
  )
}

```

## PropsWithRef

<!-- ref변수의 타입을 정의하기 위해 사용된다. useRef를 사용해 만들어진 변수는 일반적인 방법으로 전달하지않고 forwardRef를 사용하고 이때 전달된 변수의 타입을 정의하기 위해 사용됨

```JS

type InputProps = {
  // input컴포넌트의 props
}

const ChildrenInput =forwardRef<HTMLInputElement ,InputProps>((props,ref)=>{
  return <input ref={ref}/>
})


const Parent = ()=>{
const inputRef = useRef<type>(value)
return <>
  <ChildrenInput ref={inputRef}/>
</>

}


``` -->

좀더 알아보겠습니다...

## RefObject

RefObject에 대해 알기전에 먼저 useRef에대해 알아봐야한다.
useRef는 다음과같이 정의 되어있다

```JS
useRef<T>(initialValue: T): MutableRefObject<T>;
useRef<T>(initialValue: T | null): RefObject<T>;
```

useRef를 사용할때 초기값을 어떻게 정의하는지에따라 두가지 타입을 받게되는데 null을 허용하게되면 이때 RefObject타입으로반환해준다.
Refobject를 살펴보면

```JS
interface RefObject<T> {
        /**
         * The current value of the ref.
         */
        readonly current: T | null;
    }

```

다음과 같이 정의되어 있는 것을 확인할 수 있는데 readonly를 사용해서 current의 속성이 읽기 전용으로 된것을 확인 할 수있다.

useRef는 보통 두가지용도로 사용되는데 DOM요소를 조작하거나 render에 영향을 받지 않는 변수로 사용하기 위해서 사용한다.
RefObject는 용도로보면 DOM요소를 조작하기 위해 사용할때 정의해줄 타입처럼보이는데

사실 readonly는 가장 상위의 값만 조작 불가능하게 만들고 current하위에 다른 값을 조작하는것은 가능하다 current가 객체라면 그안에 값들은 조작이 가능하다.

```JS

const InputRef = useRef<number>(null)

InputRef.current = InputRef.current+3 // 불가능 readonly이기때문에

InputRef.current.value = InputRef.current.value +3 // 가능 current의 하위값을 조작하는것은 가능하다.

```

## SetStateAction

상태를 업데이트 하는 함수를 의미한다.

```JS

const Parent = ()=>{
const [state,setState] = useState<number>(1)

return <>
  <ChildrenBtn setState = {setState}/>
</>

type BtnProps = {
  // props들
  setState: Dispatch<SetSateAction<number>>
}

const ChildrenBtn =({...props들}:BtnProps)=>{
  const onClickBtn= ()=>{
    setState(...logic)
  }
  return <btn onClick={onClickBtn}/>
}
}

```

## Dispatch
Dispatch타입은 useReducer나 Redux같은 상태관리 라이브러리에서 주로 사용되는데 Dispatch타입은 
```JS
type Dispatch<A> = (value: A) => void;
    /**
     * A {@link Dispatch} function can sometimes be called without any arguments.
     */
```
다음과 같이 정의되어 있다.
Dispatch는 액션을 전달받아서 상태를 업데이트하는 함수의 타입을 정의할때 사용된다 위의 예시처럼 setState에서도 사용된다.

## MouseEvent, ChangeEvent, FormEvent, HTML<>Element (HTMLDivElement, ...etc)

DOM요소의 이벤트들을 다루기위해서 React에서 정의해준 유틸타입들이다.

index.d.ts로 가서 확인해보면 다양한 이벤트들이 정의되어있는데

```JS
SomeEvent<DOM요소> 의형태로 사용할 수 있다
```
