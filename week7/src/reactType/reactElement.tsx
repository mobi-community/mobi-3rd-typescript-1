/**
 *  'ReactElement'는 React 애플리케이션에서 하나의 React 요소를 나타낸다.
 *  주로 JSX 혹은 'React.createElement'를 통해 생성된 구조로,
 *  React 컴포넌트 트리에서 특정한 노드를 의미한다.
 *  'ReactElement'는 특정 컴포넌트와 그 컴포넌트의 props 그리고 children을 포함한다
 */

import React, { ReactElement } from "react";
import { S } from "../styles/cssStyle";

type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }): ReactElement => {
    return <button onClick={onClick}>{label}</button>;
};

const ReactElementPage: React.FC = (): ReactElement => {
    const handleClick = () => alert("버튼 클릭");

    const content = `
    type ButtonProps = {label: string; onClick: () => void;};
    
    const Button: React.FC<ButtonProps> = ({ label, onClick })
    : ReactElement => {
        return <button onClick={onClick}>{label}</button>;};
    const ReactElement: React.FC = (): ReactElement => {
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>ReactNode</h1>
                <p>{`interface ReactElement<P = any, T = any>{type: T; props: P; key: string | null;}`}</p>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <Button label="Click Me" onClick={handleClick} />
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default ReactElementPage;
