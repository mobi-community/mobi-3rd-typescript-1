type ReactElementProps = {
    children: React.ReactElement;
};

const TestReactElement = ({ children }: ReactElementProps) => {
    return (
        <>
            <div>{children}</div>
        </>
    );
};
export default TestReactElement;
