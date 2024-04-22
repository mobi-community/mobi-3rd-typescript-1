/**
 *  TypeScript에서 'Record<K,T>' 유틸리티 타입은 객체의 키와 값의 타입을 명시적으로 정의할 수 있게 해준다
 *  'K'는 키의 타입, 'T'는 해당 키에 할당될 값의 타입을 나타낸다.
 *  매핑된 타입의  한 형태로, 특정 키 집합에 대해 동일한 타입의 값을 가지는 객체를 표현할 때 유용하다.
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

const Record = () => {
    // 기본 사용 예제
    type Page = "home" | "about" | "contact";
    const descripions: Record<Page, string> = {
        home: "home",
        about: "about",
        contact: "contact",
    };

    const content = `
    type Page = "home" | "about" | "contact";
    const descripions: Record<Page, string> = {
        home: "home",
        about: "about",
        contact: "contact",};
    `;

    // 키를 동적으로 처리
    type Role = "admin" | "user" | "guest";
    const defaultPer: Record<Role, string[]> = {
        admin: ["create", "read", "update", "delete"],
        user: ["read"],
        guest: [],
    };
    const content1 = `
    type Role = "admin" | "user" | "guest";
    const defaultPer: Record<Role, string[]> = {
        admin: ["create", "read", "update", "delete"],
        user: ["read"],
        guest: [],};
    `;

    // 숫자 키를 사용하는 경우
    type ProductId = 1 | 2 | 3;
    const productNames: Record<ProductId, string> = {
        1: "kim",
        2: "jin",
        3: "sol",
    };
    const content2 = `
    type ProductId = 1 | 2 | 3;
    const productNames: Record<ProductId, string> = {
        1: "kim",2: "jin",3: "sol",};
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Record Type</h1>
                <p>타입 정의 : Record&lt;Keys, TypeOfValue&gt;</p>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre>{content}</S.Pre>
                        <p>
                            {Object.entries(descripions).map(([page, name]) => (
                                <div key={page}>
                                    {page} : {name}
                                </div>
                            ))}
                        </p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        키를 동적으로 처리
                        <S.Pre>{content1}</S.Pre>
                        {Object.entries(defaultPer).map(([role, per]) => (
                            <div key={role}>
                                {role}: {per.join(", ")}
                            </div>
                        ))}
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        숫자 키를 사용하는 경우
                        <S.Pre>{content2}</S.Pre>
                        {Object.entries(productNames).map(([id, name]) => (
                            <div key={id}>
                                Product {id} : {name}
                            </div>
                        ))}
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Record;
