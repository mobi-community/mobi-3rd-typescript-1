import type { FC } from 'react';
import { useArray } from '../../hooks/UseArray';
import { TodoType } from '../../types/Todo.type';
import { fetchTodoArray } from '../../utils/Fetch';
import OneTodo from "./components/one-todo/OneTodo";
// import { initTodoList } from '../../constants/InitState'

const Todo: FC = () => {
  // const {array:todoList} = useArray<TodoType>(initTodoList)
  const {array:todoList} = useArray<TodoType>(fetchTodoArray)

  return (
    <div>
      <h1>Todo Page</h1>
      {todoList.map((todo,idx) => (
        <OneTodo key={idx} todo={todo} />
      ))}
    </div>
  );
};
export default Todo;
