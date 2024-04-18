/**
 * TypeScript에서 인터페이스('interface')는 객체의 타입을 명시하는데 사용된다.
 * 클래스 또는 객체의 구조를 정의할 때 유용하며, TypeScript의 객체 지향 프로그래밍 패러다임에 매우 중요하다
 * 인터페이스를 통해 특정 구조를 갖춘 객체만이 특정 함수나 클래스에 전달될 수 있도록 제한할 수 있다.
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

interface User {
    id: number;
    name: string;
    age: number;
}

const content = `
    interface User {id: number;name: string;age: number;}   
    `;

interface Add extends User {
    add: string;
}
const content1 = `
interface Add extends User {add: string;}
`;

const Interface = () => {
    const users = (user: User) => {
        return user.name;
    };

    const user: User = {
        id: 1,
        name: "jinsol",
        age: 1000,
    };

    const add: Add = {
        id: 2,
        name: "sol",
        age: 5000,
        add: "test",
    };
    const content2 = `
    const users = (user: User) => {return user.name;};

    const user: User = {id: 1,name: "jinsol",age: 1000,};

    const add: Add = {id: 2,name: "sol",age: 5000,add: "test",};
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Interface Type</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <S.Pre>{content1}</S.Pre>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content2}</S.Pre>
                        <p>{users(user)}</p>
                        <p>{users(add)}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Interface;
