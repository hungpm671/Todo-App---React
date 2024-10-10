import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function Footer() {
  const {
    todos,
    filter,
    selectAllTodos,
    selectActiveTodos,
    selectCompletedTodos,
    clearCompletedTodos,
  } = useContext(AppContext);

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter((todo) => !todo.completed).length}</strong> item
          left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={`${filter === "all" && "selected"}`}
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
