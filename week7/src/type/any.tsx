/**
 * `any` 타입은 모든 종류의 값을 허용하는 타입이다.
 * `any` 타입을 사용하면 TpyeScript의 모든 타입 체크를 무시할 수 있다.
 */

import styled from "styled-components";

const Any = () => {
    const event = (e: any) => {
        return e;
    };

    return (
        <Container>
            <Box>
                <h1>Any Type</h1>
                <Wrapper>
                    <p>{event(1234)}</p>
                    <p>{event("가나다")}</p>
                </Wrapper>
            </Box>
        </Container>
    );
};
export default Any;

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
