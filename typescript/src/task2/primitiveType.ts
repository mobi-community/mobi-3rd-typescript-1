// ! Number Type : 숫자를 나타내는 타입
const number1 : number = 10
const number2 : number = 20

console.log(number1)
console.log(number2)

// ! String Type : 문자열을 나타내는 타입

const string1 : string = 'hellooo'
const string2=(fn:(a:string)=>void)=>{
    fn("helloooo")
} // (a:string)=>void : 문자열 타입 a를 하나의 매개변수로 가지고 반환값이 없는 함수

console.log(string1)
console.log(string2)

//! Boolean Type : T / F
let bool : boolean = true
bool = false

console.log(bool)

//! Object Type :number[] 구문 & string[] 사용가능 
//이렇게 쓰는게 맞는지 잘 모르겠음...
const Array1 : number[] = [1,2,3]
const Array2: Array<number> = [1,2,3,]

console.log(Array1)
console.log(Array2)

//! Any Type : 특정 값으로 인하여 타입 검사 오류가 발생하는 것을 원하지 않을 때 사용 =>모든타입 가능
//해당 값에 대한 타입 검사가 이루어지지 않음. 어떤종류의 값이든 할당 가능
//남용 시 타입안정성 잃음 . 주로 자바스크립트 코드를 타입스크립트로 마이그레이션 할때 타입정의 어려운 상황에 사용

let any1 : any = 1 // 숫자 할당
console.log(any1)
any1 = "helloooo" //문자열 할당
console.log(any1)
any1 = {name:"gkdud", age: "26"} // 겍체할당
console.log(typeof any1)

function processValue(value: any): void {
    console.log(value);
}
console.log(typeof processValue)

// ! Object Type : 객체를 나타내는 타입
let object1 : object 
object1 = {
    name: "hayoung",
    age:"26"
}
console.log(object1)

//! Unknown Type : any와 같이 모든 타입 설정 가능
// 해당 값에 대한 타입 검사가 이루어짐

const test1: unknown = 1
const test2: any = 1

console.log(test1+1) // 🚨 complie error
console.log(test2+1) // ✅ 2

//! Union Type : | 를 사용하여 타입을 정해줌 (Or 같은 느낌)
const uni : string | number = 10
const uni1 : (number | string)[] = [1,'2',3]
const uni3 : {data : (number | string)} = {data : '123'}

console.log(typeof uni)
console.log(typeof uni1)
console.log(typeof uni3)
console.log(uni3)


// !Conditional Type : 입력과 출력 타입 간의 관계 정할 수 있음 
//몰라 모르겠음 제네릭부터 모르겠음

// type TypeConditional<T> = T extends number ? string :
//  T extends number ? "number";


// ! type alias : 특정 타입에 대해 새로운 이름 지정하는 기능
// 기본 타입
type Age = number;
type Name = string;

const age: Age = 30;
const name: Name = "wendy";

// 객체 타입
type Point = {
  x: number;
  y: number;
};
const point: Point = { x: 10, y: 20 };

// 함수 타입
type Greeting = (name: string) => string;
const greet: Greeting = (name) => `Hello, ${name}!`;

  
// !interface :  상호간에 정의한 약속 혹은 규칙 
// * 객체의 스펙(속성과 속성의 타입)
// * 함수의 파라미터 및 스펙 (반환타입 등)
// * 배열과 객체를 접근하는 방식
// * 클래스

const person = { name: 'wendy', age: 26}
function logAge (obj : {age:number}){
    console.log(obj.age)
}
logAge(person)

// 위 예제에 인터페이스 적용
// 알수있는점: 인터페이스를 인자로 받아 사용시 
// 인터페이스의 속성 갯수와 인자로 받는객체 속성 갯수는 일치하지 않아도 됨
interface personAge {
    age: number
}

function logAge1 (obj : personAge) {
    console.log(obj.age)
}
const person1 = {name: 'wendy', age:26}
logAge1(person1) 

// 인터페이스의 옵션 속성 
// 인터페이스에 정의되어있는 속성을 모두 사용할 필요 없음
interface mobyy {
    name: string;
    age?: number; //인터페이스의 옵션속성
}
const mobiPerson = {
    name: 'wendy'
}
function mobiTeam (team : mobyy) {
    console.log(team.name)
}
mobiTeam(mobiPerson)

// 인터페이스의 함수타입 정의
interface login {
    (username: string, password:string): boolean
}
let loginUser: login;
loginUser = function(id:string, pw:string) {
    console.log("로그인 완료")
    return true
}

// 인터페이스의 확장
// ? 인터페이스는 인터페이스간 확장이 가능한데 , 굳이 이렇게까지 하는이유가 있나?
// ? 단순히 재사용성이 용이하기때문에 사용하나..? 
interface Person {
    name: string;
  }
  interface Drinker {
    drink: string;
  }
  interface Developer extends Person, Drinker {
    skill: string;
  }
  const fe = {} as Developer;
  fe.name = 'josh';
  fe.skill = 'TypeScript';
  fe.drink = 'Beer';

  // ! void : 반환 값이 없는 함수의 반환타입
  // 함수의 반환 타입을 void로 지정 => 반환값이 필요하지 않을때 사용
  // ex.콘솔 출력, DOM을 조작하는 함수

  function func() : void {
    console.log('sth')
  }

  function onClick(): void {
    console.log("button Clicked")
  }