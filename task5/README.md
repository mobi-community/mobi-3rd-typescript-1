# 문제풀고 적용

## 타입을 주어야하는 경우와 주지 않아도 되는 경우를 구분하여 타입 정의

### - Original
```ts
let seongyong = {
	age: 20,
  height: 190,
}

function log(obj){
	console.log(obj.height)
  return obj
}

const a = log(seongyong)
console.log(a.age)
```

### - Applying types
```ts
type Person = {
  age: number
  height: number
}
/**
 * 호출 시그니처
 * 함수의 파라미터와 반환값을 타입을 사용해, 함수의 타입을 정의
 */
type LOG<T>  = (obj:T) => T 
// interface LOG<T> {
//   (obj: T): T;
// }

let seongyong = {
	age: 20,
  height: 190,
}

const log: LOG<Person> = (obj) => {
  /**
   * 함수의 타입을 이미 선언하였음으로
   * obj 속성 중, height 가 있다는 것을 추론 가능
   */
	console.log(obj.height)
  return obj
}

const a = log(seongyong)
console.log(a.age)
```


## type alias와 interface의 차이를 이해

### 1. 기존에 정의된 타입을 기반으로 새로운 타입을 정의

```ts
type Base1 = {
  id: number
  name: string
}
type Base2 = {
  status: boolean
}
```

#### interface
- 기존 타입을 **상속** 한 뒤, 새로운 속성 추가
- 'extends' keyword 사용
- 여러 타입을 상속받는 경우 'extends' 뒤에 ',' 로 구분하여 작성

```ts
interface InterfaceMore extends Base1,Base2{
  detail: string
}
```

#### type-alias
- type-alice: 기존 타입에 새로운 타입을 **병합**
- 새로 정의될 속성에 대해, '&' 사용해서 병합될 타입을 계속 추가
```ts
type TypeMore = Base1 & Base2 & {
  detail: string
}
```

### 2. 타입 이름 중복


#### interface
- 같은 이름으로 type 선언 시, 자연스럽게 확장

```ts
interface InterfaceDeclare {
  prop1: boolean
}
interface InterfaceDeclare {
  prop2: string
}
const test: InterfaceDeclare = {
  prop1: true,
  prop2: "test"
}
```

#### type-alias
- 같은 이름으로 type 선언 시, compile-error

```ts
type TypeAliasDeclare = {
  prop1: boolean
}
type TypeAliasDeclare // 🚨 compile-error: 'TypeAliasDeclare' 식별자가 중복되었습니다.ts(2300)
= {
  prop2: string
}

```

#### 그렇다면???

```ts
interface InterfaceDeclare {
  prop1: boolean
}
type TypeAliasDeclare = {
  prop2: string
}
```

### 🤔 개인 의견
- interface 를 사용할 경우 속성의 이름과 해당 속성의 타입을 같이 설정해주야 하기 때문에, 메서드의 props 에 대한 타입 선언은 이것으로 하는 게 좋을 것 같다.
- type-alias 는 속성 이름을 따로 설정하지 않아도 되기 때문에, 하나의 변수 타입 혹은 호출 시그니처 정의에 용이할 것 같다. 
