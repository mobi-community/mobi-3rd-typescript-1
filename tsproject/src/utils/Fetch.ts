import { initTodoList } from '../constants/InitState';
import type { TodoType } from '../types/Todo.type';

export const fetchTodoArray = async ():Promise<Array<TodoType>> => {
  return new Promise<Array<TodoType>>((resolve) => {
    setTimeout(() => {
      resolve(initTodoList);
    }, 2000);
  })
  .then((data) => {
    return data;
  })
  .catch(() => {
    throw new Error("망;;");
  });
}