import styled from "styled-components";
import { Definition } from "../data/definition";
import { useState } from "react";

interface OpenStates {
    [ket: number]: boolean;
}

const MainPage = () => {
    const [isOpen, setIsOpen] = useState<OpenStates>({});

    const toggleItem = (id: number) => {
        setIsOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <Container>
            <Box>
                {Definition.map((item) => (
                    <Wrapper>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                        <button onClick={() => toggleItem(item.id)}>
                            {isOpen[item.id] ? "숨기기" : "열기"}
                        </button>
                        {isOpen[item.id] && <div>{item.component}</div>}
                    </Wrapper>
                ))}
            </Box>
        </Container>
    );
};
export default MainPage;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 400px;
`;
