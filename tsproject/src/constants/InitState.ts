import type { TodoType } from "../types/Todo.type";

export const initTodoList: Array<TodoType> = [
  {
    title: "title1",
    content: "content1",
    state: true,
  },
  {
    title: "title2",
    content: "content2",
    state: false,
  },
  {
    title: "title3",
    content: "content3",
    state: false,
  },
] as const