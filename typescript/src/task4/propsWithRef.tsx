import { forwardRef } from "react";

interface PropsWithRef {
    text: string;
}

const TestPropsWithRef = forwardRef<HTMLDivElement, PropsWithRef>(
    (props, ref) => {
        return <div ref={ref}>{props.text}</div>;
    }
);
export default TestPropsWithRef;
