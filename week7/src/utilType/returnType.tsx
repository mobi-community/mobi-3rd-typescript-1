/**
 *  'ReturnType<T> 유틸리티 타입은 함수 타입 'T'의 반환 타입을 추출하여 사용할 수 있게 한다.
 *  함수의 반환 타입을 다른 곳에서 참조하고 싶을 때 유용하게 사용된다.
 *  'ReturnType'을 사용함으로써 함수의 반환 값을 예상하고 이를 타입 체크에 활용할 수 있다.
 */

import styled from "styled-components";
import { S } from "../styles/cssStyle";
import Spacer from "../components/spacer";

const ReturnType = () => {
    // 기본 사용 예제
    const getNumber = (): number => {
        return 123;
    };
    type NumberReturnType = ReturnType<typeof getNumber>;
    const myNumber: NumberReturnType = getNumber();

    const content = ` const getNumber = (): number => {return 123;};
    type NumberReturnType = ReturnType<typeof getNumber>;
    const myNumber: NumberReturnType = getNumber();
`;

    // 조건부 함수 반환 타입
    const getStringOrNumber = (flag: boolean): string | number => {
        return flag ? "Hi!" : 100;
    };
    type StringOrNumberReturnType = ReturnType<typeof getStringOrNumber>;
    const result: StringOrNumberReturnType = getStringOrNumber(true);

    const content1 = ` const getStringOrNumber = 
    (flag: boolean): string | number => {return flag ? "Hi!" : 100;}
    type StringOrNumberReturnType = ReturnType<typeof getStringOrNumber>;
    const result: StringOrNumberReturnType = getStringOrNumber(true);`;

    return (
        <S.Container>
            <S.Box>
                <h1>ReturnType</h1>
                <p>{`type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any `}</p>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre>{content}</S.Pre>
                        <p>결과 : {myNumber}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        함수 매개변수로 사용
                        <S.Pre>{content1}</S.Pre>
                        <p> 결과 : {result}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default ReturnType;
