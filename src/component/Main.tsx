import { useContext } from "react";
import TodoItem from "./TodoItem";
import AppContext from "../contexts/AppContext";

export default function Main() {
  const { todos, filter, toggleAllCompleted } = useContext(AppContext);

  const updatedTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "active"
      ? !todo.completed
      : todo.completed
  );

  return (
    <>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={(e) => toggleAllCompleted(e.target.checked)}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {updatedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>
    </>
  );
}
