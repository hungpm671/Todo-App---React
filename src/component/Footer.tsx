import { TodoItemObject } from "./TodoItem";

export type FooterProps = {
  todos: TodoItemObject[];
  filter: string;
  selectAllTodos: (deed: string) => void;
  selectActiveTodos: (deed: string) => void;
  selectCompletedTodos: (deed: string) => void;
  clearCompletedTodos: () => void;
};

export default function Footer({
  todos,
  filter,
  selectAllTodos,
  selectActiveTodos,
  selectCompletedTodos,
  clearCompletedTodos,
}: FooterProps) {
  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter((todo) => todo.completed).length}</strong> item
          left
        </span>
        <ul className="filters">
          <li>
            <a
              className={`${filter === "all" && "selected"}`}
              href="#/"
              onClick={() => selectAllTodos("all")}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              className={`${filter === "active" && "selected"}`}
              onClick={() => selectActiveTodos("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              className={`${filter === "completed" && "selected"}`}
              onClick={() => selectCompletedTodos("completed")}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearCompletedTodos}>
          Clear completed
        </button>
      </footer>
    </>
  );
}
