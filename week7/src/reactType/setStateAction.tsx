/**
 *  'SetStateAction'은 상태 업데이트 함수의 파라미터 타입을 정의할 때 사용되는 제네릭 타입이다.
 *  상태 업데이트 함수를 사용할 때 상태를 직접 설정할 수 있는 값이나,
 *  이전 상태를 기반으로 새로운 상태를 반환하는 함수를 파라미터로 받을 수 있도록 한다.
 */

import { S } from "../styles/cssStyle";

// interface Props {
//     setState: React.Dispatch<React.SetStateAction<number>>;
// }

// const SetStateAction: React.FC<Props> = ({ setState }) => {
const SetStateAction: React.FC = () => {
    const content = `
    interface Props {
        setState: React.Dispatch<React.SetStateAction<number>>;}
    const SetStateAction: React.FC<Props> = ({setState}) => {
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>SetStateAction</h1>
                <p>{`type SetStateAction<S> = S | ((prevState: S ) => S)`}</p>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        {/* <button onClick={() => setState((prev) => prev + 1)}>
                            +
                        </button> */}
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default SetStateAction;
