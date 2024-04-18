/**
 *  'Extract<T, U>'유틸리티 타입은 두 타입 'T'와 'U'의 교집합을 형성하는 새로운 타입을 생성한다.
 *  'Extract<T, U>'는 타입 'T'에서 타입'U'에 할당 가능한 모든 속성을 추출하여  구성된 타입을 반환한다.
 *  특정 조건을 만족하는 타입의 서브셋을 추출할 때 유용하게 사용된다
 */

import { S } from "../styles/cssStyle";
import Spacer from "../components/spacer";

const ReactFC = () => {
    // 기본 사용 예제

    return (
        <S.Container>
            <S.Box>
                <h1>React.FC</h1>
                <p>{`type Extract<T, U> = T extends U ? T : never`}</p>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre></S.Pre>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        함수 매개변수로 사용
                        <S.Pre></S.Pre>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default ReactFC;
