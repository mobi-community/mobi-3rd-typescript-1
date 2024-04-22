/**
 *  React의 함수형 컴포넌트를 정의할 때 사용하는 TypeScript 타입이다
 *  함수형 컴포넌트에 대한 명시적인 타입 선언을 제공하며
 *  TypeScript는 컴포넌트의 prop타입과 반환 타입을 체크할 수 있다
 */

import { S } from "../styles/cssStyle";
import React from "react";

interface User {
    name: string;
    age?: number;
}

const ReactFC: React.FC<User> = ({ name, age }) => {
    const content = `
    interface User {name: string;age?: number;}

    const ReactFC: React.FC<User> = ({name, age}) => {
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>React.FC</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <p>{name}</p>
                        {age && <p>{age}</p>}
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default ReactFC;
