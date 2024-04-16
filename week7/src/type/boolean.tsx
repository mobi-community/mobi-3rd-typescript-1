/**
 * `boolean`타입은 논리적 참(`true`) 또는 거짓(`false`)값을 나타내는 타입이다.
 */

import { useState } from "react";
import styled from "styled-components";

const Boolean = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Container>
            <Box>
                <h1>Boolean Type</h1>
                <Wrapper>
                    {isOpen && <div>Boolean Test</div>}
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "숨김" : "열림"}
                    </button>
                </Wrapper>
            </Box>
        </Container>
    );
};
export default Boolean;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Box = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const Wrapper = styled.div`
    width: 400px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    text-align: center;
`;
