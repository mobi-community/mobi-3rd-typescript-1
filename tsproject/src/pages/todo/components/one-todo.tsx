interface TodoItem {
    title: string;
    content: string;
    state: boolean;
}

interface OneTodoProps {
    todo: TodoItem;
}

const OneTodo: React.FC<OneTodoProps> = ({ todo }) => {
    return (
        <>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <div
                style={{
                    color: todo.state ? "green" : "red",
                }}
            >
                {todo.state ? "Done" : "Not Done"}
            </div>
        </>
    );
};
export default OneTodo;
