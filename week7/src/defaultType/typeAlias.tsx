/**
 * 타입 별칭(type alias)을 사용하면 복잡한 타입을 재사용 가능한 방식으로 이름을 지정할 수 있다.
 * 기본적인 타입 뿐만 아니라 객체, 유니언, 튜플, 그리고 어떤 복잡한 타입의 구조도 정의할 수 있다.
 */

import React from "react";
import { S } from "../styles/cssStyle";

type Data = string | number | boolean;

interface TypeAliasProps {
    data: Data;
}

const TypeAlias: React.FC<TypeAliasProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Box>
                <h1>TypeAlias Type</h1>
                <S.Wrapper>Data : {data.toString()}</S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default TypeAlias;
