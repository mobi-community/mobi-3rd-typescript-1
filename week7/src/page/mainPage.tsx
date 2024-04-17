import styled from "styled-components";
import { Definition } from "../data/defaultDefinition";
import { useState } from "react";
import { UtilDefinition } from "../data/utilDefinition";

interface OpenStates {
    [ket: number]: boolean;
}

interface VisibilityProps {
    isVisible: boolean;
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
            <h1>타입스크립트의 기본 타입</h1>
            <Box>
                {Definition.map((item) => (
                    <>
                        <div style={{ height: "10px" }}></div>
                        <Wrapper key={item.id}>
                            <Title onClick={() => toggleItem(item.id)}>
                                {item.title}
                            </Title>
                            <Content isVisible={isOpen[item.id]}>
                                {isOpen[item.id] && <div>{item.content}</div>}
                                {isOpen[item.id] && <div>{item.component}</div>}
                            </Content>
                        </Wrapper>
                    </>
                ))}
            </Box>
            <h1>타입스크립트의 유틸리티 타입</h1>
            <Box>
                {UtilDefinition.map((item) => (
                    <>
                        <div style={{ height: "10px" }}></div>
                        <Wrapper key={item.id}>
                            <Title onClick={() => toggleItem(item.id)}>
                                {item.title}
                            </Title>
                            <Content isVisible={isOpen[item.id]}>
                                {isOpen[item.id] && <div>{item.content}</div>}
                                {isOpen[item.id] && <div>{item.component}</div>}
                            </Content>
                        </Wrapper>
                    </>
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
    flex-direction: column;
`;

const Title = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 600px;
    box-shadow: 2px 2px 2px 2px #ccc;
    border-radius: 8px;
    padding: 10px;
`;

const Content = styled.div<VisibilityProps>`
    display: ${(props) => (props.isVisible ? "block" : "none")};
`;
