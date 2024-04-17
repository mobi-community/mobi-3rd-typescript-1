/**
 *  TypeScript에서 'enum'(열거형)은 특정 값들의 집합을 명명된 상수로 정의할 때 사용된다
 *  코드의 가독성과 유지보수성을 높일 수 있다.
 */

import { S } from "../styles/cssStyle";

// 숫자형 열거형
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

// 문자형 열거형
enum strDeirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 이종 열거형
enum BooleanEnum {
    No = 0,
    Yes = "YES",
}

const respond = (str: string, message: Direction) => {
    return `Message to ${str} : ${message}`;
};

const Enum = () => {
    return (
        <S.Container>
            <S.Box>
                <h1>Enum Type</h1>
                <p>
                    숫자형 열거형: 값을 지정하지 않으면 기본적으로 0부터
                    시작하는 숫자가 할당된다.
                    <p>{`enum Direction {Up,Down,Left,Right,}`}</p>
                </p>
                <p>
                    문자형 열거형: 직접 할당 가능, 각 값은 그 문자열로 초기화 됨
                    <p>{`enum strDeirection {Up = "UP",Down = "DOWN",Left = "LEFT",Right = "RIGHT",}`}</p>
                </p>
                <p>
                    이종 열거형: 숫자와 문자열 혼합하여 열거형 정의 가능.
                    <span>가능한 일관된 타입을 사용하는 것이 좋음</span>
                    <p>{`enum BooleanEnum {No = 0,Yes = "YES",}`}</p>
                </p>
                <S.Wrapper>
                    <p>{respond("UP", Direction.Up)}</p>
                    <p>
                        Direction[1] - 숫자형 열거형에서만 사용가능 :
                        {Direction[1]}
                    </p>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Enum;
