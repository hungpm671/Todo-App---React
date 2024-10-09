import TodoItem, { TodoItemObject } from "./TodoItem";

export type TodosProps = {
  todos: TodoItemObject[];
  filter: string;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
};

export default function Main({
  todos,
  filter,
  toggleCompleted,
  deleteTodo,
  editTodo,
}: TodosProps) {
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
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {updatedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
