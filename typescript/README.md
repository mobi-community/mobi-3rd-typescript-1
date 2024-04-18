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
## forwardRef

HTML태그의 타입을 

