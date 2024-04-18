/**
 *  'Omit<T, K>' 유틸리티 타입은 타입 'T'에서 선택된 속성 'K'를 제거한 타입을 생성한다.
 *  'Omit'은 특정 속성을 제외하고 타입의 나머지 부분을 사용하고 싶을 때 유용하다
 *  객체 타입을 조작하여 새로운 타입을 도출하는데 도움을 주며, 타입 세이프티를 유지하면서 필요하지 않은 속성을 제거할 수 있다
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

interface User {
    name: string;
    age: number;
    location: string;
}

type UserLocation = Omit<User, "location">;

const Omit = () => {
    // 기본 사용 예제
    const user: UserLocation = {
        name: "jinsol",
        age: 10005,
    };
    const content = `
    const user: UserLocation = {
        name: "jinsol",
        age: 10005,};
    `;

    // 여러 속성 제거
    type UserAgeLocation = Omit<User, "age" | "location">;
    const userDetails: UserAgeLocation = {
        name: "sol",
    };
    const content1 = `
    type UserAgeLocation = Omit<User, "age" | "location">;
    const userDetails: UserAgeLocation = {name: "sol",};
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Omit Type</h1>
                <p>{`type Omit<T, K extends keyof any> = Pick<T, Exclude<ketof T, K>>`}</p>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre>{content}</S.Pre>
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        여러 속성 제거
                        <S.Pre>{content1}</S.Pre>
                        <p>{userDetails.name}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Omit;
