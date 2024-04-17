/**
 * Union 타입은 여러 타입 중 하나가 될 수 있는 값을 정의할 때 사용한다.
 * 다양한 타입을 하나의 타입으로 조합할 수 있게 해준다.
 * Union 타입은 각 타입을 파이프('|') 기호로 연결하여 사용한다.
 */

import React from "react";
import { S } from "../styles/cssStyle";

interface UnionProps {
    title: string | number;
}

const Union: React.FC<UnionProps> = ({ title }) => {
    return (
        <S.Container>
            <S.Box>
                <h1>Union Type</h1>
                <p>{`interface UnionProps {title: string | number;}`}</p>
                <S.Wrapper>{title}</S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Union;
