/**
 *  'satisfies' 연산자를 사용하면 값이 특정 타입과 호환되는지 확인하고, 호환되지 않을 경우 컴파일 타임에 에러를 발생시킨다.
 *  주로 타입 안정성을 보장하고, 타입 계약을 명시적으로 표현하는데 도움을 준다.
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

const Satisfies = () => {
    // 기본 사용 예제
    interface User {
        name: string;
        age: number;
    }
    // User 인터페이스에 location 속정이 정의되어 있지 않으므로, satisfies 연산자에 의해
    // 타입 검사가 이루어지지않는다
    // satisfies는 추가 속성을 무시하고, 주어진 타입의 필수 속성만 만족하는지 검사한다
    const user = {
        name: "sol",
        age: 29,
        // location: "seoul",
    } satisfies User;

    const content = `
    interface User {
        name: string;
        age: number;}

    const user = {
        name: "sol",
        age: 29,
        location: "seoul",
    } satisfies User;
    `;

    // 함수 반환 타입 검증
    const getUser = (): User => {
        return {
            name: "Gang",
            age: 129,
            // extra: "data",
        } satisfies User;
    };
    const content1 = `
    const getUser = (): User => {
        return {name: "Gang",age: 129,extra: "data",
    } satisfies User;};
    `;

    // 유닛 테스트
    const testUser = (user: User) => {
        return user.name.length > 0 && user.age >= 0;
    };
    const testUserData = {
        name: "jinsol",
        age: -100,
    } satisfies User;
    const content2 = `
    const testUser = (user:User) => {
        return user.name.length > 0 && user.age >= 0;}
    const testUserData = {name: "jinsol",age: -100,} satisfies User;
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Satisfies</h1>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre>{content}</S.Pre>
                        <p>
                            {user.name} {user.age}
                        </p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        함수 매개변수로 사용
                        <S.Pre>{content1}</S.Pre>
                        <p>
                            결과 : {getUser().name} {getUser().age}
                        </p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        인터페이스 확장 시 선택적 속성
                        <S.Pre>{content2}</S.Pre>
                        <p>결과 : {testUser(testUserData)}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Satisfies;
