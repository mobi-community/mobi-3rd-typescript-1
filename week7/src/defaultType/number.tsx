/**
 * Number(숫자)
 * JavaScript처럼, TypeScript의 모든 숫자는 부동 소수 값이다.
 * 부동 소수에는 `number`라는 타입이 붙혀진다.
 * TypeScript는 16진수, 10진수 리터럴에 더불어, ECMAScript 2015에 소개된 2진수, 8진수 리터럴도 지원한다.
 * JavaScript와 마찬가지로, TypeScript에서 숫자는 모두 배정밀도 64비트 형식 IEEE 754값 (즉, `double`)으로 표현된다.
 *
 * `number`타입 사용 시, 숫자 값이 아닌 다른 값이 할당되려고 하면 컴파일 에러를 발생시킨다.
 */

import { S } from "../styles/cssStyle";

const NumberPage = () => {
    const age: number = 30; // 정수
    const price: number = 99.99; // 부동소수점 숫자
    const hexValue: number = 0xf00d; // 16진수
    const binaryValue: number = 0b1010; // 2진수
    const octalValue: number = 0o744; // 8진수

    const addNumber = (x: number, y: number) => {
        return x + y;
    };

    const calAver = (num: number[]) => {
        return num.reduce((acc, cur) => acc + cur / num.length, 0);
    };

    return (
        <S.Container>
            <S.Box>
                <h1>Number Type</h1>
                <p>{`const calAver = (num: number[]) => {
        return num.reduce((acc, cur) => acc + cur / num.length, 0);
    };`}</p>
                <S.Wrapper>
                    <p>정수 : {age}</p>
                    <p>부동소수점 : {price} </p>
                    <p>16진수 : {hexValue} </p>
                    <p>2진수 : {binaryValue}</p>
                    <p>8진수 : {octalValue}</p>
                    <p>두 수의 합 : {addNumber(10, 10)}</p>
                    <p>평균 값 : {calAver([10, 20, 30, 40, 50])}</p>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default NumberPage;
