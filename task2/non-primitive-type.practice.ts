// any
const any_num1: any = "1"
const any_num2: string = "1"
console.log(any_num1.toFixed(2)) // run-time error, 'any' 는 compile 시 타입 검사 ❌
console.log(any_num2.toFixed(2)) // compile error, 사실 editor 기능으로 compile 전에 확인 가능.!


/** -------------------------------- */

// object
let obj: object
obj = {
  name: "Jeff",
  age: 27,
}
console.log(obj) // { name: 'Jeff', age: 27 }

// 기존 구조를 변경해도 error 없음
obj = {
  isTarget: true,
  operatingTime: Date.now(),
}
console.log(obj) // { isTarget: true, operatingTime: 1713260162520 } 

/** -------------------------------- */

// array
const arr1: Array<number> = [1, 2, 3, 4, 5]
const arr2: Array<string> = arr1.map(String)
const arr3: number[] = arr2.map(Number)
const arr4: boolean[] = arr3.map((num) => num % 2 === 0)

console.log(arr1) // [ 1, 2, 3, 4, 5 ]
console.log(arr2) // [ '1', '2', '3', '4', '5' ]
console.log(arr3) // [ 1, 2, 3, 4, 5 ]
console.log(arr4) // [ false, true, false, true, false ]

/** -------------------------------- */

// unknown
const unknown_val: unknown = 1
console.log(unknown_val + 1) // 🚨 오류 발생, compile 불가
if (typeof unknown_val === 'number') console.log(unknown_val + 1) // ✅ 출력결과: 2, 타입을 확정한 뒤, 연산가능.

/** -------------------------------- */

// union, conditional
type TypeConditional<T> = T extends string ?  string : number
type TestType<T> = {
  value: TypeConditional<T>
}
const testObject1:TestType<number|string> = {
  value: 123.321
}
const testObject2:TestType<number|string> = {
  value: "123.321"
}
const objectArray: Array<TestType<number|string>> = [
  testObject1,testObject2
]
objectArray.forEach((object) => {
  if (typeof object.value === 'number') {
   console.log(object.value.toFixed(1)) // ✅ 출력결과: 123.3
  }
  else console.log(object.value) // ✅ 출력결과: 123.321
})