/**
 * 조건부 타입(Conditional Types)은 입력된 타입에 따라 다른 타입을 반환할 수 있도록 해주는 고급 유형 시스템 기능이다.
 * 일반적으로 제네릭 타입과 함께 사용되며, 특정 조건에 따라 타입을 분기 처리할 수 있다
 * 기본 형태
 * TypeA extends TypeB ? TypeC : TypeD;
 */

import React from "react";
import { S } from "../styles/cssStyle";

interface ConditionalProps {
    data: string;
}

const Conditional: React.FC<ConditionalProps> = ({ data }) => {
    type ProcessedData = typeof data extends string ? string : "";
    const processedData: ProcessedData =
        typeof data === "string" ? data.toUpperCase() : "";

    const content = `
    interface ConditionalProps {data: string;}
    
    const Conditional: React.FC<ConditionalProps> = ({ data }) => {
        type ProcessedData = typeof data extends string ? string : "";
        const processedData: ProcessedData =
            typeof data === "string" ? data.toUpperCase() : "";
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Conditional Type</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <p>결과 : {processedData}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Conditional;
