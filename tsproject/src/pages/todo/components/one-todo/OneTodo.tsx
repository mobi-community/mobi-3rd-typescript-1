import type { FC } from "react";
import type { OneTodoProps } from "./OneTodo.type";
const OneTodo: FC<OneTodoProps> = (props) => {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.content}</div>
      <div
        style={{
          color: props.state ? "green" : "red",
        }}
      >
        {props.state ? "Done" : "Not Done"}
      </div>
    </>
  );
};
export default OneTodo;
