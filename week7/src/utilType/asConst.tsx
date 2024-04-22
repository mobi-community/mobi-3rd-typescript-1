/**
 *  TypeScript에서 'as const'는 특정 값들이나 객체의 프로퍼티가 변하지 않도록
 *  "상수"로 표시하는 방법이다.
 *  해당 값들을 리터럴 타입으로 추론하며, 이러한 리터럴 타입은 더욱 구체적이고 제한적인 타입을 가진다
 *  컴파일러가 더 엄격한 타입 검사를 수행하도록 할 수 있다.
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

const AsConst = () => {
    // 변수에 사용
    const status = "error" as const;
    const handleError = (message: typeof status) => {
        return `Error: ${message}`;
    };
    const content = `
    const status = "error" as const;
    const handleError = (message: typeof status) => {
        return 'Error: $.{message}';}; //.은 빼야합니다
    `;

    // 객체에 사용
    const config = {
        name: "sol",
        age: 129,
    } as const;
    const content1 = `
    const config = {name: "sol",age: 129,} as const;
    `;

    // 배열에 사용
    const colors = ["red", "green", "blue"] as const;
    const setColor = (color: (typeof colors)[number]) => {
        return `set to ${color}`;
    };
    const content2 = `
    const colors = ["red", "green", "blue"] as const;
    const setColor = (color: (typeof colors)[number]) => 
    {return 'set to $.{color}';}; //.은 빼야합니다
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Enum Type</h1>
                <p>특징</p>
                <p>
                    값의 재할당 방지: `const`와 비슷하게 값을 재할당할 수 없다
                </p>
                <p>
                    객체의 프로퍼티를 읽기 전용으로 만듦: 객체 내부의 모든
                    프로퍼티가 `readonly`로 설정됨
                </p>
                <p>
                    배열의 타입을 정확한 값의 튜플로 만듦: 배열의 요소들이 특정
                    순서와 타입을 유지한다
                </p>
                <p>
                    타입 확장 방지: 객체 리터럴을 사용할 때 추가적인 프로퍼티를
                    할당할 수 없게한다
                </p>
                <S.Wrapper>
                    <S.Text>
                        변수에 사용하기
                        <S.Pre>{content}</S.Pre>
                        <p>{handleError("error")}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        객체에 사용하기
                        <S.Pre>{content1}</S.Pre>
                        <p>
                            {config.name} {config.age}
                        </p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        배열에 사용하기
                        <S.Pre>{content2}</S.Pre>
                        <p>{setColor("blue")}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default AsConst;
