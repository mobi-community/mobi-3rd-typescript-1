import styled from "styled-components";
import { Definition } from "../data/definition";
import Any from "../type/any";
import Array from "../type/array";
import Boolean from "../type/boolean";
import Object from "../type/object";
import Unknown from "../type/unknown";

const MainPage = () => {
    return (
        <Container>
            {Definition.map((item) => (
                <Wrapper>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    {item.component}
                </Wrapper>
            ))}
            <Boolean />
            <Any />
            <Object />
            <Array />
            <Unknown />
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

const Wrapper = styled.div`
    width: 400px;
`;
