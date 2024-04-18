/**
 *  'PropsWithChildren' 타입은 유용한 유틸리티 타입 중 하나이다.
 *  컴포넌트의 props에 자식 요소(children)가 포함될 수 있음을 명시적으로 나타내기 위해 사용된다.
 *  주어진 props타입에 자동으로 'children' prop을 추가해주는 역할을 한다.
 */

import { S } from "../styles/cssStyle";
import React, { PropsWithChildren } from "react";

type ContainerProps = {
    style?: React.CSSProperties;
};

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
    style,
    children,
}) => {
    return <div style={style}>{children}</div>;
};

const PropsWithChildren: React.FC = () => {
    const content = `
    type ContainerProps = {
        style?: React.CSSProperties;};
    
    const Container: React.FC<PropsWithChildren<ContainerProps>>
     = ({ style,children,}) => {
        return <div style={style}>{children}</div>;
    };
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>React.FC</h1>
                <p>{`type PropsWithChildren<P> = P & { children?: React.ReactNode }`}</p>
                <S.Wrapper>
                    <S.Text>
                        <S.Pre>{content}</S.Pre>
                        <Container
                            style={{
                                padding: "20px",
                                border: "1px solid #000",
                            }}
                        >
                            <p>PropsWithChildren</p>
                        </Container>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default PropsWithChildren;
