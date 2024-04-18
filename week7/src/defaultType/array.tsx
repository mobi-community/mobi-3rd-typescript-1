/**
 * TypeScript에서 배열을 정의하는 방법은 몇 가지가 있다.
 * 일반 배열 타입: `타입[]`을 사용하여 배열의 요소 타입을 지정
 * 제네릭 배열 타입: `Array<타입>`을 사용하여 배열을 정의
 * 기능적으로는 동일하다
 */

import styled from "styled-components";
import { S } from "../styles/cssStyle";

const Array = () => {
    // 숫자 배열
    const numbers: number[] = [1, 2, 3, 4, 5];
    const numbersGeneric: Array<number> = [1, 2, 3, 4, 5];

    const content = `
    const numbers: number[] = [1, 2, 3, 4, 5];
    const numbersGeneric: Array<number> = [1, 2, 3, 4, 5];
    `;

    // 문자열 배열
    const strArr: string[] = ["가나다", "라마바", "사아자차", "카타파하"];
    const strArrGeneric: Array<string> = ["abc", "dfg", "hijk", "lnm"];

    const content1 = `
    const strArr: string[] = ["가나다", "라마바", "사아자차", "카타파하"];
    const strArrGeneric: Array<string> = ["abc", "dfg", "hijk", "lnm"];
    `;

    // 객체배열
    interface User {
        name: string;
        age: number;
    }

    const users: User[] = [
        { name: "jinsol", age: 1000 },
        { name: "soljin", age: 1200 },
    ];

    const usersGeneric: Array<User> = [
        { name: "jinsol", age: 1000 },
        { name: "soljin", age: 1200 },
    ];

    const content2 = `
    interface User {name: string;age: number;}

    const users: User[] = [
        { name: "jinsol", age: 1000 },
        { name: "soljin", age: 1200 },];

    const usersGeneric: Array<User> = [
        { name: "jinsol", age: 1000 },
        { name: "soljin", age: 1200 },];
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Array Type</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <p>{numbers}</p>
                        <p>{numbersGeneric}</p>
                    </S.Text>
                </S.Wrapper>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content1}</S.Pre>
                        <p>{strArr}</p>
                        <p>{strArrGeneric}</p>
                    </S.Text>
                </S.Wrapper>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content2}</S.Pre>
                        {users.map((data) => (
                            <>
                                <p>{data.name}</p>
                                <p>{data.age}</p>
                            </>
                        ))}
                        {usersGeneric.map((data) => (
                            <>
                                <p>{data.name}</p>
                                <p>{data.age}</p>
                            </>
                        ))}
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Array;

const P = styled.p`
    text-align: center;
`;
