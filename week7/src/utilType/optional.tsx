/**
 *  선택적 속성은 객체의 인터페이스 또는 타입 정의에서 특정 속성이 필수가 아닌 선택적으로 포함될 수 있음을 나타난다.
 *  속성 이름 뒤에 ?(물음표)를 붙여서 표시하며, 이는 해당 속성이 해당 타입의 객체에서 있어도 되고 없어도 되는 것을 의미한다.
 */

import Spacer from "../components/spacer";
import { S } from "../styles/cssStyle";

const Optional = () => {
    // 기본 사용 예제
    interface Person {
        name: string;
        age?: number;
    }
    const person1: Person = {
        name: "jin",
    };
    const person2: Person = {
        name: "sol",
        age: 1000,
    };

    const content = `interface Person {name: string;age?: number;}
    const person1: Person = {name: "jin",};
    const person2: Person = {name: "sol",age: 1000,};`;

    // 함수 매개변수 사용
    const greet = (person: Person) => {
        if (person.age !== undefined) {
            return `${person.name} ${person.age}`;
        }
        return person.name;
    };

    const content1 = ` const greet = (person: Person) => {
        if(person.age !== undefined){return $.{person.age}'}
        return person.name} //.은 빼야합니다`;

    // 인터페이스 확장 시 선택적 속성
    interface Info extends Person {
        email: string;
        location?: string;
    }
    const info: Info = {
        name: "jin",
        email: "jin@example.com",
    };

    const content2 = `
    interface Info extends Person {email: string;location?: string;}
    const info: Info = {name: "jin",email: "jin@example.com",};

    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Optional</h1>
                <p>{`interfact Person {name:string; age?: number;}`}</p>
                <S.Wrapper>
                    <S.Text>
                        기본 사용
                        <S.Pre>{content}</S.Pre>
                        <p>person1 : {person1.name}</p>
                        <p>
                            person2 : {person2.name} {person2.age}
                        </p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        함수 매개변수로 사용
                        <S.Pre>{content1}</S.Pre>
                        <p> 결과 : {greet({ name: "sol", age: 20 })}</p>
                    </S.Text>
                </S.Wrapper>
                <Spacer height="10px" />
                <S.Wrapper>
                    <S.Text>
                        인터페이스 확장 시 선택적 속성
                        <S.Pre>{content2}</S.Pre>
                        <p>
                            결과 : {info.name} {info.email} {info.age}
                        </p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Optional;
