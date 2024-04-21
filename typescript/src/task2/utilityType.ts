// !제네릭 (먼저 공부..)
function getText<T>(text: T): T {
    return text;
  }
getText<string>('hi');
getText<number>(10);
getText<boolean>(true);

// function logText<T>(text: T): T {
//     return text;
//   }

// // #1 사용
// const text1 = logText<string>("Hello Generic");
// // #2 사용
// const text = logText("Hello Generic");


// !제너릭 인터페이스
// * enum 과 namespace는 제너릭으로 생성 불가
// function loggText<T>(text: T): T {
//     return text;
//   }
//   // #1
//   let str: <T>(text: T) => T = logText;
//   // #2
//   let str: {<T>(text: T): T} = logText;
  
interface LengthWise {
    length: number;
  }
  
  function logText<T extends LengthWise>(text: T): T {
    console.log(text.length);
    return text;
  }
  logText(10); // Error, 숫자 타입에는 `length`가 존재하지 않으므로 오류 발생
  logText({ length: 0, value: 'hi' }); // `text.length` 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음


// !enum : 특정값(상수)들의 집합
// * 숫자형 이넘 : 이넘 값에 다른 이넘 타입의 값 사용시 선언하는 이넘의 첫번째 값은 초기화해야함
// * 문자형 이넘

enum Mobi {wendy, gang=3, brilly}
const hero = Mobi[0] // 웽디
const member = Mobi[4] // 브렐레

console.log(hero)
console.log(member)

enum Direction {
    Up = "up",
    Down = "down",
    Left = "left"
}
const direct = Direction.Up
console.log(direct)

// ! as const : 값을 그대로 유지하는 타입을 생성
// 주로 객체나 배열을 상수화하거나 불변성을 보장하기 위해 사용

const person = {
    name: "wendy",
    age:26,
} as const

// ! partial : 특정 타입의 부분 집합을 만족하는 타입을 정의
interface Address {
    email: string;
    address: string;
  }
type Email = Partial<Address>;
const me: Email = {};
const you: Email = { email: 'test@abc.com' };
const all: Email = { email: 'capt@hero.com', address: 'Pangyo' };
// 배열과 객체에 as const 선언시 읽기 전용으로 설정되어 속성 수정 불가.
const colors = ["red", "green", "blue"] as const;
// // colors.push("yellow"); // 에러: 'push' 속성이 존재하지 않음.

// ! record : 주어진 키와 값을 사용하여 객체타입 생성
type numbers = Record<string,string>;
const phone: numbers = {
    wendy : "010-2623-29292929",
    alice : "010-2345-2345"
}

// ! omit : 지정된 키를 제외한 타입을 생성
interface AddressBook {
    name: string;
    phone: number;
    address: string;
  }
  const phoneBook: Omit<AddressBook, 'address'> = {
    name: '재택근무',
    phone: 12342223333,
  }
  const chingtao: Omit<AddressBook, 'address'|'phone'> = {
    name: '중국집',
  }

// ! pick : 지정된 키만 포함한 타입을 생성
type NameOnly = Pick<Person, "name">;
const personNameOnly: NameOnly = {
  name: "wendy",
};

// ! extract : 주어진 타입에 포함된 키 중 특정 타입에 할당 가능한 키를 추출
type StringKeys = Extract<keyof Person, string>;
const stringKey: StringKeys = "name";

// ! returnType : 함수의 반환 타입을 가져옴
function greet(): string {
    return "Hello!";
  }
type GreetReturnType = ReturnType<typeof greet>; 
const message: GreetReturnType = "Hello!";

// ! optional : 주어진 타입의 모든 속성을 선택적으로 만듦
interface Person {
    name: string;
    age?: number; // 옵셔널 속성
  }

// ! satisfies : 주어진 타입이 특정 조건을 만족하는지 검사, 조건을 만족하지 않을경우 컨파일 타입에러 발생
// 구글링으로 문서 참조함
// 특정 항목을 제한할 수 있음
type MyState = StateName | StateCordinates //union type
type StateName = "Seoul" | "Busan" | "Daegu"
type StateCordinates = { x: number; y: number }
type User = {
  birthState: MyState
  currentState: MyState
}
const user = {
  birthState: "Daegu",
  currentState: { x: 1, y: 1 },
} satisfies User // User타입을 모두 찾아 미리 밸리데이팅하라고 강제로 시킴
user.birthState.toLowerCase()

//특정항목 제한하는 예제
type Keys = 'FirstName' |"LastName"| "age"|"school"| "email"
const student = {
  FirstName: "Temitope",
  LastName: "Oyedele",
  // age: true, -> error
  age: 26,
  school:"oxford",
}satisfies Partial<Record<Keys, string | number>>;// keys 라는 union 타입 제한(string or numbr로 타입항목을 제한)
