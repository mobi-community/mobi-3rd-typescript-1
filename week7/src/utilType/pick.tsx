/**
 *  'Pick<T, K> 유틸리티 타입은 타입 'T'에서 선택한 속성 'K'만을 포함하는 새로운 타입을 생성한다.
 *  특정 속성들만 추출하여 사용하고 싶을 때 매우 유용하다
 *  'Pick'을 사용함으로써, 복잡한 타입에서 필요한 부분만을 간소화하여 새로운 타입을 정의할 수 있다.
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

const Pick = () => {
    // 기본 사용 예제
    interface User {
        id: number;
        name: string;
        department: string;
        email: string;
    }
    // name과 email속성만 추출하여 사용
    type UserDetails = Pick<User, "name" | "email">;
    const contactUser: UserDetails = {
        name: "sol",
        email: "sol@example.com",
    };

    const content = `
    interface User {
        id: number;
        name: string;
        department: string;
        email: string;
    }
    // name과 email속성만 추출하여 사용
    type UserDetails = Pick<User, "name" | "email">;
    const contactUser: UserDetails = {
        name: "sol",
        email: "sol@example.com",
    };
    `;

    // 함수 매개변수로 사용
    const sendEamil = (contact: Pick<User, "email">) => {
        return `이메일 전송 : ${contact.email}`;
    };
    const content1 = `
    const sendEamil = (contact: Pick<User, "email">) => {
        return '이메일 전송 : $.{contact.email}' // .은 빼야합니다;
    };
    `;

    // 복수의 타입 결합하여 사용
    type UserProfile = Pick<User, "id" | "name">;
    type userContact = Pick<User, "email">;
    const createUserProfile = (profile: UserProfile, contact: userContact) => {
        return { ...profile, ...contact };
    };
    const user = createUserProfile(
        { id: 1, name: "jin" },
        { email: "solsol@example.com" }
    );

    const content2 = `
    type UserProfile = Pick<User, "id" | "name">;
    type userContact = Pick<User, "email">;
    const createUserProfile=(profile: UserProfile, contact: userContact)=>
    {return { ...profile, ...contact };};
    const user = createUserProfile(
        { id: 1, name: "jin" },
        { email: "solsol@example.com" });
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Pick Type</h1>
                <p>{`type Pick<T, K extends keyof T> = {[P in K]: T[P]}`}</p>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre>{content}</S.Pre>
                        <p>
                            name: {contactUser.name}, email: {contactUser.email}
                        </p>
                        <p></p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        함수 매개변수로 사용
                        <S.Pre>{content1}</S.Pre>
                        <p>{sendEamil({ email: "sol@example.com" })}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        복수의 타입 결합해서 사용
                        <S.Pre>{content2}</S.Pre>
                        <p>userID : {user.id}</p>
                        <p>userName : {user.name}</p>
                        <p>userEmail : {user.email}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Pick;
