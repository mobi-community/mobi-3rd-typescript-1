import styled from "styled-components";
import TestReactFC from "../task4/reactFC";
import TestReactNode from "../task4/reactNode";
import TestReactElement from "../task4/reactElement";
import TestPropsWithChildren from "../task4/propsWithChildren";
import { useRef } from "react";
import TestPropsWithRef from "../task4/propsWithRef";
import TestRefObject from "../task4/refObject";

const MainPage = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const onClick = () => {
        if (divRef.current) {
            divRef.current.style.color = "blue";
            divRef.current.style.backgroundColor = "tomato";
        }
    };
    return (
        <>
            <BorderBox>
                <h2>React.FC 사용해보기</h2>
                <TestReactFC name="wendy" age={26} />
            </BorderBox>
            <BorderBox>
                <h2>ReactNode 사용해보기</h2>
                <TestReactNode>
                    <p>reactnode 사용중입니다</p>
                </TestReactNode>
            </BorderBox>
            <BorderBox>
                <h2>ReactElement 사용해보기</h2>
                <TestReactElement>
                    {/* reactElement 사용중입니다 => string 컴파일 에러*/}
                    <p>reactElement 사용중입니다</p>
                </TestReactElement>
            </BorderBox>
            <BorderBox>
                <h2>propsWithChildren 사용해보기</h2>
                <TestPropsWithChildren
                    title="propsWithChildren"
                    name="wendy"
                    age={26}
                ></TestPropsWithChildren>
            </BorderBox>
            <BorderBox>
                <h2>propsWithRef 사용해보기</h2>
                <TestPropsWithRef ref={divRef} text="안냐세요 웽딥니당" />
                <button onClick={onClick}>Button을 눌러보거라</button>
            </BorderBox>
            <BorderBox>
                <h2>refObject 사용해보기</h2>
                <TestRefObject text="안녕하세요 웽디입니댱" />
            </BorderBox>
        </>
    );
};
export default MainPage;
const BorderBox = styled.div`
    border: 2px solid #000;
    width: 500px;
    border-radius: 10px;
    padding-bottom: 10px;
`;
