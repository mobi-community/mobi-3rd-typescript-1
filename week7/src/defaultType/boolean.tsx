/**
 * `boolean`타입은 논리적 참(`true`) 또는 거짓(`false`)값을 나타내는 타입이다.
 */

import { useState } from "react";

import { S } from "../styles/cssStyle";

const Boolean = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const content = `
    const [isOpen, setIsOpen] = useState<boolean>(false);
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>Boolean Type</h1>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen && <div>Boolean Test</div>}
                            {isOpen ? "숨김" : "열림"}
                        </button>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default Boolean;
