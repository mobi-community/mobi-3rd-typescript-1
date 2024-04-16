// number
const num1 : number = 6;
const num2 : number = 3.14;
const num3 : number = 0b1111; // 2진수
const num4 : number = 0o777; // 8진수
const num5 : number = 0xff; // 16진수

console.log(num1) // ✅ 출력결과: 6
console.log(num2) // ✅ 출력결과: 3.14
console.log(num3) // ✅ 출력결과: 15
console.log(num4) // ✅ 출력결과: 511
console.log(num5) // ✅ 출력결과: 255

/** -------------------------------- */

// bigint
const bi_num : number = Number.MAX_SAFE_INTEGER
const bi_big : bigint = BigInt(bi_num)
const test_big : bigint = 1n
console.log(bi_num) // ✅ 출력결과: 9007199254740991
console.log(bi_big) // ✅ 출력결과: 9007199254740991n
console.log(test_big) // ✅ 출력결과: 1n

/** -------------------------------- */

// string
const str1: string = 'hello, world'
const str2: string = "hello, world"
const str3: string = `${str1}. bye bye!!`
console.log(str1) // ✅ 출력결과: hello, world
console.log(str2) // ✅ 출력결과: hello, world
console.log(str3) // ✅ 출력결과: hello, world. bye bye!!

