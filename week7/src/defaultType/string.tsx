/**
 * `string`타입은 텍스트 데이터를 표현하는 데 사용된다
 * JavaScrpit와 마찬가지로, TypeScript의 `string`은 유니코드 문자의 시퀀스로 구성된다
 * 문자열은 "", '', ``을 사용하여 생성할 수 있다
 *
 */
import { S } from "../styles/cssStyle";

const String = () => {
    const name: string = "Jin sol"; // 문자열 리터럴을 사용
    const greeting: string = "Hello" + name; // 문자열 연결
    const age: number = 29;
    const ageStatement: string = `${name} 은 ${age}살 입니다.`;

    const content = `
    const name: string = "Jin sol"; // 문자열 리터럴을 사용
    const greeting: string = "Hello" + name; // 문자열 연결
    const age: number = 29;
    const ageStatement: string = '${name} 은 ${age}살 입니다.'';
    `;

    const address = (name: string, address: string) => {
        return `이름: ${name} 주소: ${address}`;
    };
    const content1 = `
    const address = (name: string, address: string) => {
        return '이름: $.{name} 주소: $.{address}';};
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>String Type</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <p>{name}</p>
                        <p>{greeting} </p>
                        <p>{ageStatement} </p>
                    </S.Text>
                </S.Wrapper>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content1}</S.Pre>
                        <p>{address("진솔", "서울 금천구")}</p>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default String;
