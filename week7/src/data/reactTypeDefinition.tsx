import PropsWithChildren from "../reactType/propsWithChildren";
import ReactElementPage from "../reactType/reactElement";
import ReactFC from "../reactType/reactFC";
import ReactNodePage from "../reactType/reactNode";
import RefObject from "../reactType/refObject";
import SetStateAction from "../reactType/setStateAction";
import DispatchPage from "../reactType/dispatch";
import EventType from "../reactType/eventType";

interface Arrangement {
    id: number;
    title: string;
    content: string;
    component: React.ReactElement;
}

export const ReactTypeDefinition: Array<Arrangement> = [
    {
        id: 41,
        title: "React.FC",
        content: `
        1. React.FC의 사용을 지양했던 이유
            - 명시적인 'children' 선언 누락: 'React.FC'또는'React.FunctionComponent'타입은
              기본적으로 'children' 속성을 포함하고 있다. 
              이는 모든 함수가 컴포넌트가 'children'을 받아들일 수 있음을 암시하는데, 
              이것은 항상 원하는 상황은 아니다.
              개발자가 'children'을 명시적으로 사용하지 않는다면, 타입에서 제외하는 것이 명확하다
            - 컴포넌트 defaultProps의 암시적 사용: React17 이전에는 'React.FC'를 사용할 때
              'defaultProps'가 자동적으로 타입 추론을 처리했다.
              하지만 함수 컴포넌트에서는 이 방식이 예상과 다르게 동작할 수 있고, 특히 TypeScript
              에서는 이런 자동 추론이 오히려 혼란을 줄 수 있다.

        2. React 18 이후 React.FC 사용 가능한 이유
            - TypeScript 개선: TypeScript의 타입 추론 및 제네릭 관리가 개선되어, 'React.FC'를
              사용해도 발생하던 문제들(예: defaultProps의 제한적인 사용)이 완화되었습니다.
            - React 팀의 지침 변화: 초기에는 'React.FC'의 사용을 공식적으로 권장하지 않았으나,
              타입스크립트와 리액트 개발 커뮤니티에서 널리 사용하게 되면서, 이에 대한 지침이 완화되거나
              변경된 경우가 있다.
        
        3. React.FC를 사용할 수 없는 환경과 대처 방안
            - 타입스크립트를 사용하지 않는 환경 : 타입스크립트를 사용하지 않는 환경이면 React.FC를 사용할 수 없다
            - 타입스크립트 프로젝트에서 명시성을 선호하는 경우 : React.FC의 자동 children 포함이나 다른 타입 추론 문제로
            인해 명시적 타입 정의를 선호할 수 있다
                - 대처 방안 : interface나 type을 사용하여 명시적트로 프롭 타입을 정의하고, 일반 함수로 컴포넌트를 작성한다
                            더 명확한 타입 체크와 더 나은 문서화를 제공할 수 있다.
    `,
        component: <ReactFC name="sol" />,
    },
    {
        id: 42,
        title: "ReactNode",
        content: `
        'ReactNode'는 React 요소 트리에서 노드를 나타낼 수 있는 타입이다.
        컴포넌트가 렌더링할 수 있는 모든 것을 포함한다
        다음과 같은 것들을 포함할 수 있다.
        1.'ReactElement'-JSX 또는 'React.createElement'를 통해 생성된 릭액트 엘리먼트
        2.'string'및'number'-DOM에서 텍스트 노드로 렌더링 된다
        3.'null'alc'boolean'-렌더링할 때 아무것도 표시하지 않습니다.
        4.'ReactFragment'-그룹화된 자식을 나타내는 데 사용할 수 있습니다.
        5.'ReactPortal'-다른 DOM 하위 트리에 자식을 렌더링할 수 있다.
        `,
        component: <ReactNodePage />,
    },
    {
        id: 43,
        title: "ReactElement",
        content: `
        'ReactElement'는 React 애플리케이션에서 하나의 React 요소를 나타낸다.
        주로 JSX 혹은 'React.createElement'를 통해 생성된 구조로,
        React 컴포넌트 트리에서 특정한 노드를 의미한다.
        'ReactElement'는 특정 컴포넌트와 그 컴포넌트의 props 그리고 children을 포함한다
        `,
        component: <ReactElementPage />,
    },
    {
        id: 44,
        title: "PropsWithChildren",
        content: `
        'PropsWithChildren' 타입은 유용한 유틸리티 타입 중 하나이다.
        컴포넌트의 props에 자식 요소(children)가 포함될 수 있음을 명시적으로 나타내기 위해 사용된다.
        주어진 props타입에 자동으로 'children' prop을 추가해주는 역할을 한다.
        `,
        component: <PropsWithChildren />,
    },
    {
        id: 45,
        title: "RefObject",
        content: `
        'RefObject'는 React 요소나 DOM 요소에 대한 참조를 보유하는 객체이다.
        'RefObject'는 주로 React의 'createRef' 함수로 생성된다.
        이 객체는 불변 객체로서, 그 참조는 생성 후 변경될 수 없으며, 주로 클래스 컴포넌트에서 사용된다.
        'useRef'훅을 사용하는 함수 컴포넌트에서는 'MutableRefObject'타입이 더 자주 사용된다.
        `,
        component: <RefObject />,
    },
    {
        id: 46,
        title: "SetStateAction",
        content: `
        'SetStateAction'은 상태 업데이트 함수의 파라미터 타입을 정의할 때 사용되는 제네릭 타입이다.
        상태 업데이트 함수를 사용할 때 상태를 직접 설정할 수 있는 값이나,
        이전 상태를 기반으로 새로운 상태를 반환하는 함수를 파라미터로 받을 수 있도록 한다.
        `,
        component: <SetStateAction />,
    },
    {
        id: 47,
        title: "Dispatch",
        content: `
        'Dispatch' 타입은 특정 액션을 발행(dispatch)하는 함수의 타입을 정의 하는데 사용된다.
        일반적으로 Redux의 액션 디스패처나 React의 상태 업데이트 함수('useState'의 세터 함수)에 사용된다.
        `,
        component: <DispatchPage />,
    },
    {
        id: 48,
        title: "EventType",
        content: `
        자주 접하는 이벤트 타입에는 'MouseEvent','ChangeEvent','FormEvent'등이 있다.
        이벤트 타입들은 React에서 HTML 요소의 이벤트를 처리할 때 타입 안정성을 제공한다.
        `,
        component: <EventType />,
    },
];
