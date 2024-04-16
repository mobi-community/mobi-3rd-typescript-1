/**
 * `string`타입은 텍스트 데이터를 표현하는 데 사용된다
 * JavaScrpit와 마찬가지로, TypeScript의 `string`은 유니코드 문자의 시퀀스로 구성된다
 * 문자열은 "", '', ``을 사용하여 생성할 수 있다
 *
 */

import styled from "styled-components";

const String = () => {
    const name: string = "Jin sol"; // 문자열 리터럴을 사용
    const greeting: string = "Hello" + name; // 문자열 연결

    const age: number = 29;
    const ageStatement: string = `${name} 은 ${age}살 입니다.`;

    const address = (name: string, address: string) => {
        return `이름: ${name} 주소: ${address}`;
    };

    return (
        <Container>
            <Box>
                <h1>String Type</h1>
                <Wrapper>
                    <p>{name}</p>
                    <p>{greeting} </p>
                    <p>{ageStatement} </p>
                    <p>{address("진솔", "서울 금천구")}</p>
                </Wrapper>
            </Box>
        </Container>
    );
};
export default String;

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
