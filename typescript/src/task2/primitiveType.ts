//Number Type : 숫자를 나타내는 타입
const number1 : number = 10
const number2 : number = 20

console.log(number1)
console.log(number2)

// String Type : 문자열을 나타내는 타입

const string1 : string = 'hellooo'
const string2=(fn:(a:string)=>void)=>{
    fn("helloooo")
} // (a:string)=>void : 문자열 타입 a를 하나의 매개변수로 가지고 반환값이 없는 함수

console.log(string1)
console.log(string2)

//Boolean Type : T / F
let bool : boolean = true
bool = false

console.log(bool)

//Array Type :number[] 구문 & string[] 사용가능 
//이렇게 쓰는게 맞는지 잘 모르겠음...
const Array1 : number[] = [1,2,3]
const Array2: Array<number> = [1,2,3,]

console.log(Array1)
console.log(Array2)

//Any Type : 특정 값으로 인하여 타입 검사 오류가 발생하는 것을 원하지 않을 때 사용 =>모든타입 가능
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

//Unknown Type : 

//Union Type : | 를 사용하여 타입을 정해줌 (Or 같은 느낌)
const uni : string | number = 10
const uni1 : (number | string)[] = [1,'2',3]
const uni3 : {data : (number | string)} = {data : '123'}

console.log(typeof uni)
console.log(typeof uni1)
console.log(typeof uni3)
console.log(uni3)