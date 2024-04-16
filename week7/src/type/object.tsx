/**
 * `object`타입은 비원시 타입을 의미한다.
 * 숫자, 문자열, 불리언, 심볼,`null`,또는 `undefined`가 아닌 모든 것을 나타낸다
 * 배열, 함수, 클래스, 그리고 일반적인 객체 리터럴을 포함한다
 */

import styled from "styled-components";

interface User {
    name: string;
    age: number;
}

const Object = () => {
    const user1: User = {
        name: "jin",
        age: 900,
    };
    const user2: User = {
        name: "sol",
        age: 1080,
    };

    const getName = (user: User): string => user.name;

    const setAge = (user: User, newAge: number): User => ({
        ...user,
        age: newAge,
    });

    const mergeUsers = (user1: User, user2: Partial<User>): User => ({
        ...user1,
        ...user2,
    });

    const updateUser = setAge(user1, 1100);
    const mergedUser = mergeUsers(user1, user2);

    return (
        <Container>
            <Box>
                <h1>object Type</h1>
                <Wrapper>
                    <p>name : {getName(user1)}</p>
                    <p>name : {getName(user2)}</p>
                    <p>Updated Age: {updateUser.age}</p>
                    <p>
                        Merge User : {mergedUser.name}, Age: {mergedUser.age}
                    </p>
                </Wrapper>
            </Box>
        </Container>
    );
};
export default Object;

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
