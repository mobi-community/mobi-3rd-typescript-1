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

//! Array Type :number[] 구문 & string[] 사용가능 
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
  
//
interface LengthWise {
    length: number;
  }
  
  function logText<T extends LengthWise>(text: T): T {
    console.log(text.length);
    return text;
  }
  logText(10); // Error, 숫자 타입에는 `length`가 존재하지 않으므로 오류 발생
  logText({ length: 0, value: 'hi' }); // `text.length` 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음

  // ! type alias
  