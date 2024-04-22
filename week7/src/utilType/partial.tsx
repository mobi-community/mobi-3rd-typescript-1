/**
 *  'Partial<T>' 유틸리티 타잉ㅂ은 주어진 타입'T'의 모든 속성을 선택적으로 만든다.
 *  'Partial'을 사용하면 기존 타입의 모든 필드를 포함하지만
 *  각 필드는 필수가 아니라 선택 사항이 된다.
 *  다향한 상황에서 객체를 부분적으로 업데이트하거나 초기화할 필요가 있을 때 유용하다.
 */

import { S } from "../styles/cssStyle";

interface User {
    id: number;
    name: string;
    email: string;
}

const Partial = () => {
    const updateUser = (user: User, filedToUpdate: Partial<User>): User => {
        return { ...user, ...filedToUpdate };
    };
    const user: User = {
        id: 1,
        name: "jinsol",
        email: "jinjin@example.com",
    };
    const updatedUser = updateUser(user, { email: "jinsol@example.com" });

    const content = `
    const updateUser = (user: User, filedToUpdate: Partial<User>): User => {
        return { ...user, ...filedToUpdate };};
    const user: User = {
        id: 1,
        name: "jinsol",
        email: "jinjin@example.com",};
    const updatedUser = updateUser(user, { email: "jinsol@example.com" });
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Partial Type</h1>
                <p>{`type Partial<T> = {[P in keyof T]?: T[P]}`}</p>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <p>user id : {updatedUser.id}</p>
                        <p>name : {updatedUser.name}</p>
                        <p>email : {updatedUser.email}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Partial;
