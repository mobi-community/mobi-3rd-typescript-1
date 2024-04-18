/**
 * TypeScript에서 `unknown` 타입은 `any`타입의 타입-안전한 대안으로 도입되었다
 * 어떠한 값도 `unknown`에 할당할 수 있습니다.
 * `unknown` 타입의 변수에는 타입을 좁히기 전에는 어떤 연산도 수행할 수 없다
 * `unknown`타입을 다른 타입에 할당하려면, 타입 검사를 통해 해당 타입이 맞는지 확인하거나 타입 단언을 사용해야한다
 */

import { S } from "../styles/cssStyle";

const Unknown = () => {
    const viewValue = (val: unknown) => {
        if (typeof val === "number") {
            return val + 1;
        } else if (typeof val === "string") {
            return val.toUpperCase();
        } else {
            return "지원되지 않는 타입입니다.";
        }
    };
    const content = `
    const viewValue = (val: unknown) => {
        if (typeof val === "number") {
            return val + 1;
        } else if (typeof val === "string") {
            return val.toUpperCase();
        } else {
            return "지원되지 않는 타입입니다.";}};
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Unknown Type</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <p>{viewValue(1)}</p>
                        <p>{viewValue("abc")}</p>
                        <p>{viewValue([1, 2, 3])}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Unknown;
