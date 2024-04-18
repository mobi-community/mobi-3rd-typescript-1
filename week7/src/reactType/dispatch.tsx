/**
 *  'Dispatch' 타입은 특정 액션을 발행(dispatch)하는 함수의 타입을 정의 하는데 사용된다.
 *  일반적으로 Redux의 액션 디스패처나 React의 상태 업데이트 함수('useState'의 세터 함수)에 사용된다.
 */

import { Dispatch } from "redux";
import { S } from "../styles/cssStyle";
import { useDispatch } from "react-redux";
// Redux와 사용하는 dispatch

interface IncrementAction {
    type: "INCREMENT";
}
interface DecrementAction {
    type: "DECREMENT";
}

type Action = IncrementAction | DecrementAction;

const DispatchPage: React.FC = () => {
    // redux로 useDispatch를 생성해주어야함
    const dispatch = useDispatch<Dispatch<Action>>();

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    const content = `
    interface IncrementAction {type: "INCREMENT";}
    interface DecrementAction {type: "DECREMENT";}
    type Action = IncrementAction | DecrementAction;
    `;

    const content1 = `
    // redux로 useDispatch를 생성해주어야함
    const dispatch = useDispatch<Dispatch<Action>>();
    const handleIncrement = () => {dispatch({ type: "INCREMENT" });};
    const handleDecrement = () => {dispatch({ type: "DECREMENT" });};
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>SetStateAction</h1>
                <p>{`type Dispatch<A> = {value: A} => void`}</p>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <S.Pre>{content1}</S.Pre>
                        <button onClick={handleIncrement}>+</button>
                        <button onClick={handleDecrement}>-</button>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default DispatchPage;
