import { createContext } from "react";
import { TodoItemObject } from "../component/TodoItem";

export type AppContextObject = {
  todos: TodoItemObject[];
  filter: string;
  toggleCompleted: (id: number) => void;
  toggleAllCompleted: (completed: boolean) => void;
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
  clearCompletedTodos: () => void;
  selectAllTodos: (deed: string) => void;
  selectActiveTodos: (deed: string) => void;
  selectCompletedTodos: (deed: string) => void;
};

const AppContext = createContext<AppContextObject>({} as AppContextObject);

export default AppContext;
