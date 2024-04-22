/**
 * `object`타입은 비원시 타입을 의미한다.
 * 숫자, 문자열, 불리언, 심볼,`null`,또는 `undefined`가 아닌 모든 것을 나타낸다
 * 배열, 함수, 클래스, 그리고 일반적인 객체 리터럴을 포함한다
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

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
    const content = `
    const user1: User = {
        name: "jin",
        age: 900,};
    const user2: User = {
        name: "sol",
        age: 1080,};
    `;

    const getName = (user: User): string => user.name;
    const content1 = `
    const getName = (user: User): string => user.name;
    `;

    const setAge = (user: User, newAge: number): User => ({
        ...user,
        age: newAge,
    });
    const content2 = `
    const setAge = (user: User, newAge: number): User => ({
        ...user,age: newAge,});
    const updateUser = setAge(user1, 1100);
    `;

    const mergeUsers = (user1: User, user2: Partial<User>): User => ({
        ...user1,
        ...user2,
    });
    const content3 = `
    const mergeUsers = (user1: User, user2: Partial<User>): User => ({
        ...user1,...user2,});
    const mergedUser = mergeUsers(user1, user2);
    `;

    const updateUser = setAge(user1, 1100);
    const mergedUser = mergeUsers(user1, user2);

    return (
        <S.Container>
            <S.Box>
                <h1>object Type</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content1}</S.Pre>
                        <p>name : {getName(user1)}</p>
                        <p>name : {getName(user2)}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content2}</S.Pre>
                        <p>Updated Age: {updateUser.age}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content3}</S.Pre>
                        <p>
                            Merge User : {mergedUser.name}, Age:{" "}
                            {mergedUser.age}
                        </p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Object;
