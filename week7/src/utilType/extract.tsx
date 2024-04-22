/**
 *  'Extract<T, U>'유틸리티 타입은 두 타입 'T'와 'U'의 교집합을 형성하는 새로운 타입을 생성한다.
 *  'Extract<T, U>'는 타입 'T'에서 타입'U'에 할당 가능한 모든 속성을 추출하여  구성된 타입을 반환한다.
 *  특정 조건을 만족하는 타입의 서브셋을 추출할 때 유용하게 사용된다
 */

import { S } from "../styles/cssStyle";
import Spacer from "../components/spacer";

const Extract = () => {
    // 기본 사용 예제
    type AvailableColors = "red" | "green" | "blue" | "yellow";
    type PrimaryColors = "red" | "blue" | "purple";

    type CommonColors = Extract<AvailableColors, PrimaryColors>;

    const color: CommonColors = "red";

    const content = `type AvailableColors = "red" | "green" | "blue" | "yellow";
    type PrimaryColors = "red" | "blue" | "purple";
    type CommonColors = Extract<AvailableColors, PrimaryColors>;
    const color: CommonColors = "red";
    `;

    // 함수 매개변수 사용
    type EventNames = "click" | "scroll" | "mousemove";
    type MouseEvents = "click" | "mousemove";

    const handleEvent = (eventName: Extract<EventNames, MouseEvents>) => {
        return `Handeling event : ${eventName}`;
    };

    const content1 = `type EventNames = 'click' | "scroll" | "mousemove";
    type MouseEvents = 'click' | 'mousemove';
    const handleEvent = (eventName: Extract<EventNames, MouseEvents>) => {
        return 'Handeling event : $.{eventName}' // .은 빼야합니다}`;

    return (
        <S.Container>
            <S.Box>
                <h1>Extract Type</h1>
                <p>{`type Extract<T, U> = T extends U ? T : never`}</p>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre>{content}</S.Pre>
                        <p>결과 : {color}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        함수 매개변수로 사용
                        <S.Pre>{content1}</S.Pre>
                        <p> 결과 : {handleEvent("click")}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Extract;
