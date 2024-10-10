import { TodoItemObject } from "../component/TodoItem";
import { ActionType } from "../contexts/AppContext";

const todosReducer = (currentTodos: TodoItemObject[], action: ActionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...currentTodos,
        { id: Date.now(), title: action.payload.title, completed: false },
      ];
    case "DELETE_TODO":
      return currentTodos.filter((todo) => todo.id !== action.payload.id);
    case "EDIT_TODO":
      return currentTodos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    case "TOGGLE_COMPLETED":
      return currentTodos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "TOGGLE_ALL_COMPLETED":
      return currentTodos.map((todo) => ({
        ...todo,
        completed: action.payload.completed,
      }));
    case "CLEAR_COMPLETED_TODOS":
      return currentTodos.filter((todo) => !todo.completed);
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export default todosReducer;
