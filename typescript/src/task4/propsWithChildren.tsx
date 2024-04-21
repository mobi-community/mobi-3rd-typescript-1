import { PropsWithChildren } from "react";

type propsWithChildren = PropsWithChildren<{
    title: string;
    name?: string;
    age?: number;
}>;

const TestPropsWithChildren = (props: propsWithChildren) => {
    const { title, name, age, children } = props;
    return (
        <div>
            <p>{title}</p>
            {name && <p>Name: {name}</p>}
            {age && <p>Age: {age}</p>}
            {children}
        </div>
    );
};
export default TestPropsWithChildren;
