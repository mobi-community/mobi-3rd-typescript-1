/**
 * `any` 타입은 모든 종류의 값을 허용하는 타입이다.
 * `any` 타입을 사용하면 TpyeScript의 모든 타입 체크를 무시할 수 있다.
 */

import { S } from "../styles/cssStyle";

const Any = () => {
    const event = (e: any) => {
        return e;
    };
    const content = `
    const event = (e: any) => {return e;};
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Any Type</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <p>{event(1234)}</p>
                        <p>{event("가나다")}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Any;
