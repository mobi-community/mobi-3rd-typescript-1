/**
 *  'ReactNode'는 React 요소 트리에서 노드를 나타낼 수 있는 타입이다.
 *  컴포넌트가 렌더링할 수 있는 모든 것을 포함한다
 *  다음과 같은 것들을 포함할 수 있다.
 *  1.'ReactElement'-JSX 또는 'React.createElement'를 통해 생성된 릭액트 엘리먼트
 *  2.'string'및'number'-DOM에서 텍스트 노드로 렌더링 된다
 *  3.'null'alc'boolean'-렌더링할 때 아무것도 표시하지 않습니다.
 *  4.'ReactFragment'-그룹화된 자식을 나타내는 데 사용할 수 있습니다.
 *  5.'ReactPortal'-다른 DOM 하위 트리에 자식을 렌더링할 수 있다.
 */

import { S } from "../styles/cssStyle";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

const ReactNodePage = () => {
    const content = `
        type Props = {children: ReactNode;}
        const Container: React.FC<Props> = ({ children }) => {
            return <div>{children}</div>}
    `;

    return (
        <S.Container>
            <S.Box>
                <h1>ReactNode</h1>
                <S.Wrapper>
                    <S.Text>
                        <Container>
                            <S.Pre>{content}</S.Pre>
                        </Container>
                    </S.Text>
                </S.Wrapper>
            </S.Box>
        </S.Container>
    );
};
export default ReactNodePage;
