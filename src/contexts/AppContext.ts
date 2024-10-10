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

export type ActionType =
  | { type: "TOGGLE_COMPLETED"; payload: { id: number } }
  | { type: "TOGGLE_ALL_COMPLETED"; payload: { completed: boolean } }
  | { type: "ADD_TODO"; payload: { title: string } }
  | { type: "DELETE_TODO"; payload: { id: number } }
  | { type: "EDIT_TODO"; payload: { id: number; title: string } }
  | { type: "CLEAR_COMPLETED_TODOS" };

// export type AppContextObject = {
//   state: TodoItemObject[];
//   dispatch: Dispatch<ActionType>;
// };

const AppContext = createContext<AppContextObject>({} as AppContextObject);

export default AppContext;
