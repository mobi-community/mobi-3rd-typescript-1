import ReactFC from "../reactType/reactFC";

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
        1. React.FC의 사용을 지양했던 이유 \n
        2. React 18 이후 React.FC 사용 가능한 이유
    `,
        component: <ReactFC />,
    },
];
