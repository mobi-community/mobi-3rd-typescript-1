// type number : 숫자만 허용
let num: number = 30
num = 10 // 가능
num = "10" // 불가능
// type string : 문자만 허용
let str: string = "30"
str = "3-33"
str = 30
// type boolean : boolean만 허용 T or F
let bool: boolean = true
bool = false
bool = "true"
bool = {}
// type any : 모든 타입을 허용
let any: any = "gd"
any = 1
any = "gdgd"
any = {}
any = [] // 다가능
// type unknown : 모든 타입을 허용
/**
 * any 와 unknown 의 차이점
 * unknown은 any타입외에는 할당할 수 가없다. 반면 any는 어떤 타입이든 허용이가능하고 또한 어떤 메서드, 프로퍼티에 접근하기가 가능하다.
 * 따라서 any타입은 오류를 발생시키지 않고 unknown은 타입을 좁혀주면 그때 메서드나 프로퍼티를 사용할 수 있다.
 * unknown은 조금더 안전하게 사용 할 수 있어보인다.
 */
let Question: unknown = ""
Question = 1
Question = {}
Question = true

let uk: unknown = 1
let bool: boolean = uk // uk는 unknown타입이기때문에 이런식으로는 할당불가
bool = any // 반면 any는 언제든할당 가능

// type array : umber[] 과같은 형태로 배열의 요소가 어떤 타입을 가질건지 선언해주거나
//              generic을이용해서 Array<number> 과같은 형태로 사용가능
let Arr: Array<number> = []
Arr = [1, 2, 3, 4]
Arr = ["1", "2"]
let Arr2: number[] = []
Arr2 = [1, 2, 3, 4]
Arr2 = ["1", "2"]

// type union : |로 어떤 타입이 올 수 있는지 명시해주면 사용가능함
let uni: string | number = 10
uni = "10"
uni = {}
uni = 10

type IsNumber<T> = T extends number ? "Yes" : "No"

type Test1 = IsNumber<number> // "Yes"
type Test2 = IsNumber<string> // "No"

// tpye alias : 타입에 별칭을 붙혀서 원하는 타입을 사용할 수 있게해줌. 원시타입에 새로이름을 붙혀주는 것은 추천되지않고
//              주로 객체나 union타입에 별칭을 붙혀주는 형태로사용 또한 일반변수와 차이를두기 위해 첫자는 대문자로 많이사용함
// 형태는 type 별칭 = 사용하고싶은타입 형태로 작성
type TestType = string | number

let testObj: TestType = "test"
testObj = 1
testObj = []

type objType = {
  num: number
  str: string
}
const obj: objType = {
  num: 1,
  str: "string",
}

// interface : 객체의 타입을 선언해줄때 좀더 명확하게 선언해줄 수 있는 장점이 있다.
//            또한 extends를 사용해서 해당 interface를 확장, 재사용해 줄 수있는 장점이 있다.
interface Person {
  num: number
  age: number
}
const person: Person = {
  num: 1,
  age: 10,
}
interface Sumperman extends Person {
  power: string
}
const hero: Sumperman = {
  age: 1,
  num: 10,
  power: "strong",
}

// enum : 상수를 열거형을 다룰때 사용함,
/*  enum Weather {
  sun ,
  cloud ,
  rain ,
} 
의형태로 사용하면 0부터순차적으로 값이 할당되고 직접 값을 입력해주는 것도 가능하다.
그러나 tree shaking을 해주지않기때문에 번들의 사이즈가 커질 수 있다는 단점이 있어서 union타입이나 typeassertion을 사용하는 방법으로 대체될수 있다고하는데 
프로젝트에 어떤 방식이 효율적일지는 때에 따라 다를거같다.
*/
enum Weather {
  sun = "sunny",
  cloud = "cloudy",
  rain = "rainy",
}

const weather: Weather = Weather.cloud

// as const : as const를 사용하면 타입을 추론하는 것이 아니라 확정 시킬 수 있다.
// 해당 값이 어떤것이 할당 되었는지 확인할 수있고 수정또한 불가능하다. 상수화가됨.

const color = {
  red: "#ffffff",
  blue: "#2r2r2r2r",
}

const colorConst = {
  red: "#ffffff",
  blue: "#2r2r2r2r",
} as const

// record : 객체의 key와 value를 지정해 줄 수 있는 타입 단점은 각키마다 타입을 지정해 줄 수는 없다는 것이다.

type TestRecord = Record<"name1" | "name2", string | number>

const nameObj: TestRecord = {
  name1: "홍길동",
  name2: "1231",
}

// partial : 기존타입의 항목들을 전부 옵셔널 하게 만들어준다. 모든 항목을 사용하지 않아도 문제를 발생시키지 않음

interface TestPartial {
  name: string
  age: number
}

type OptinalInfo = Partial<TestPartial>

let optionalInfo: OptinalInfo = {}
optionalInfo = { age: 1 }
optionalInfo = { name: "홍길동", age: 1 }

// omit : 기존타입의 특정 키값을 제외한 타입을 생성할때 사용한다. 어떤 타입에서 더 좁은 범위의 타입을 만들때 사용하면 좋을것같다.

type Travel = Record<"sea" | "mountain" | "Korea" | "Japan", string>

type TravelCountry = Omit<Travel, "sea" | "mountain">

const travelCountry: TravelCountry = {
  Japan: "살아남음",
  Korea: "살아남음",
}

// pick : omit과 반대로 특정 키값을 추출해서 해당 키값들만 포함한 새로운 타입을 생성해줌

type ExceptCountry = Pick<Travel, "sea" | "mountain">

const travelExceptCountry: ExceptCountry = { mountain: "성공", sea: "성공" }

// extract : Extract<T , U> 형태로 사용하는데 T타입에 U타입이 포함되어있다면 포함된 U타입만 사용가능
// 반대로 exclude는 U타입을 제외한 나머지 타입을 사용가능

type Alphabet = "A" | "B" | "C"

type FirstAplhabet = "A"

type FirstEnglish = Extract<Alphabet, FirstAplhabet>

const spellA: FirstAplhabet = "A"

let spellRest: Exclude<Alphabet, FirstAplhabet> = "B"
spellRest = "C"

// returnType : 함수의 반환 타입을 추출함

const returnString = () => {
  return "STRING"
}

const returnNumber = () => {
  return 1000
}

const GetString: ReturnType<typeof returnString> = "strinㅇㄹㅇㄹg" //typeof사용해서
const GetNumber: ReturnType<typeof returnNumber> = 1221212

// optional : partial처럼 동작시킬수있는데 특정 값이 올수도있고 안올수도있게 선택적으로 만들어줌

type Test = {
  age?: number
  name?: string
}

let testObj12: Test = {}
testObj12 = { age: 10 }

// satisfies
type MyState = StateName | StateCordinates

type StateName = "Seoul" | "Busan" | "Daegu"

type StateCordinates = { x: number; y: number }

type User = {
  birthState: MyState
  currentState: MyState
}

const user = {
  birthState: "Busan",
  currentState: { x: 1, y: 1 },
} satisfies User

user.birthState.toUpperCase()

// generic : 타입의 변수화 이다. 사용시점에 타입을 선언해 줄 수 있다.

const changeNumtoStr = <T>(number: T) => {
  if (typeof number === "number") return number.toString()
}
