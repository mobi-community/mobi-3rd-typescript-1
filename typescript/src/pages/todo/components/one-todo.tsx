import { FC } from "react"

type TodoListType = {
  title: string
  content: string
  state: boolean
}

const OneTodo: FC<TodoListType> = ({ title, content, state }) => {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      <div
        style={{
          color: state ? "green" : "red",
        }}
      >
        {state ? "Done" : "Not Done"}
      </div>
    </>
  )
}
export default OneTodo
