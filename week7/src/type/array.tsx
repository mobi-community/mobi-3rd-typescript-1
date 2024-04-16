/**
 * TypeScript에서 배열을 정의하는 방법은 몇 가지가 있다.
 * 일반 배열 타입: `타입[]`을 사용하여 배열의 요소 타입을 지정
 * 제네릭 배열 타입: `Array<타입>`을 사용하여 배열을 정의
 * 기능적으로는 동일하다
 */

import styled from "styled-components";

const Array = () => {
    // 숫자 배열
    const numbers: number[] = [1, 2, 3, 4, 5];
    const numbersGeneric: Array<number> = [1, 2, 3, 4, 5];

    // 문자열 배열
    const strArr: string[] = ["가나다", "라마바", "사아자차", "카타파하"];
    const strArrGeneric: Array<string> = ["abc", "dfg", "hijk", "lnm"];

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

    return (
        <Container>
            <Box>
                <h1>Array Type</h1>
                <Wrapper>
                    <p>{numbers}</p>
                    <p>{numbersGeneric}</p>
                    <p>{strArr}</p>
                    <p>{strArrGeneric}</p>
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
                </Wrapper>
            </Box>
        </Container>
    );
};
export default Array;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Box = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const Wrapper = styled.div`
    width: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    text-align: center;
`;
