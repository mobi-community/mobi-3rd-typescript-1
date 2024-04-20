import type { FC } from "react";
import type { OneTodoProps } from "./OneTodo.type";
const OneTodo: FC<OneTodoProps> = ({todo}) => {
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
