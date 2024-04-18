/**
 *  제네릭은 코드에서 타입을 매개변수처럼 사용할 수 있도록 해줍니다.
 *  제네릭을 사용하면 함수, 클래스, 인터페이스, 타입 등을 다양한 타입으로 재사용할 수 있어 타입의 유연성을 크게 향상시킨다.
 *  코드 중복을 줄이고, 타입 안정성을 높이며, 유지보수를 용이하게 한다
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

const Generic = () => {
    // 기본 사용 예제
    const identity = <T,>(arg: T): T => {
        return arg;
    };
    const stringResult = identity<string>("졸립다");
    const numberResult = identity<number>(10010);

    const content = `const identity = <T,>(arg:T): T => {
        return arg;
        }
    let stringResult = identity<string>("졸립다");
    let numberResult = identity<number>(10010);
`;

    // 배열 반환
    const listLengths = <T extends { length: number }>(list: T[]): number[] => {
        return list.map((item) => item.length);
    };
    const lengths = listLengths(["김진솔", "진솔", "김진솔진솔"]);

    const content1 = ` const listLengths = <T extends {length: number}>(list: T[]): number[] => {
        return list.map(item => item.length);
    }
    const lengths = listLengths(["김진솔","진솔","김진솔진솔"]);`;

    // 객체의 특정 속성을 추출
    const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
        return obj[key];
    };
    const obj = { name: "sol", age: 103203 };
    const name = getProperty(obj, "name");
    const age = getProperty(obj, "age");

    const content2 = `
    const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
        return obj[key];
    };
    const obj = { name: "sol", age: 103203 };
    const name = getProperty(obj, "name");
    const age = getProperty(obj, "age");
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Generic</h1>
                <p>{`const identity = <T,>(arg: T): T => {return arg;}`}</p>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre>{content}</S.Pre>
                        <p>string : {stringResult}</p>
                        <p>number : {numberResult}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        배열 반환 (length 구하기)
                        <S.Pre>{content1}</S.Pre>
                        <p> 결과 : {lengths}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        객체의 특정 속성을 추출
                        <S.Pre>{content2}</S.Pre>
                        <p>
                            결과 : {name} {age}
                        </p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Generic;
