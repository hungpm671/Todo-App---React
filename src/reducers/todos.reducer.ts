import { TodoItemObject } from "../component/TodoItem";

const todosReducer = (currentTodos: TodoItemObject[], action) => {
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
        completed: action.payload,
      }));
    case "CLEAR_COMPLETED_TODOS":
      return currentTodos.filter((todo) => !todo.completed);
    // case "SELECT_ALL_TODOS":
    //   return currentTodos.map((todo) => ({...todo, completed: action.payload }));
    // case "SELECT_ACTIVE_TODOS":
    //   return currentTodos.filter((todo) =>!todo.completed);
    // case "SELECT_COMPLETED_TODOS":
    //   return currentTodos.filter((todo) => todo.completed);
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default todosReducer;
