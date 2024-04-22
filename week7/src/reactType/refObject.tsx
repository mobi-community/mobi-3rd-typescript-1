/**
 *  'RefObject'는 React 요소나 DOM 요소에 대한 참조를 보유하는 객체이다.
 *  'RefObject'는 주로 React의 'createRef' 함수로 생성된다.
 *  이 객체는 불변 객체로서, 그 참조는 생성 후 변경될 수 없으며, 주로 클래스 컴포넌트에서 사용된다.
 *  'useRef'훅을 사용하는 함수 컴포넌트에서는 'MutableRefObject'타입이 더 자주 사용된다.
 */

import { S } from "../styles/cssStyle";
import { useRef } from "react";

const RefObject = () => {
    // 자동으로 RefObject<HTMLInputElement> 타입이 적용된다.
    const inputRef = useRef<HTMLInputElement>(null);

    const focusTextInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const content = `
    // 자동으로 RefObject<HTMLInputElement> 타입이 적용된다.
    const inputRef = useRef<HTMLInputElement>(null);

    const focusTextInput = () => {
        if(inputRef.current) {inputRef.current.focus();}}
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>RefObject</h1>
                <p>{`interface RefObject<T> { readonly current: T | null; }`}</p>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <input type="text" ref={inputRef} />
                        <button onClick={focusTextInput}>
                            Focus the input
                        </button>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default RefObject;
