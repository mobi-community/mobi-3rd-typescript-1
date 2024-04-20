import styled from "styled-components"
import TestReactFC from "../task4/reactFC"
import TestReactNode from "../task4/reactNode"
import TestReactElement from "../task4/reactElement"
import TestPropsWithChildren from "../task4/propsWithChildren"

const MainPage = ()=>{
    return (
        <>
        <BorderBox>
            <h2>React.FC 사용해보기</h2>
            <TestReactFC name= "wendy" age={26}/>
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
            <TestPropsWithChildren title="propsWithChildren" name="wendy" age={26}>
            </TestPropsWithChildren>
        </BorderBox>
        </>

    )
}
export default MainPage
const BorderBox = styled.div`
border:2px solid #000;
width: 500px;
border-radius: 10px;
padding-bottom:10px;

`