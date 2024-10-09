import { useState } from "react";

export type TodoItemObject = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoItemProps = {
  todo: TodoItemObject;
  toggleCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
};

export default function TodoItem({
  todo,
  toggleCompleted,
  deleteTodo,
  editTodo,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  return (
    <li
      className={`${todo.completed ? "completed" : ""} ${
        isEditing ? "editing" : ""
      }`}
      onDoubleClick={handleDoubleClick}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
        />
        <label>{todo.title}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
      <input
        className="edit"
        defaultValue="Create a TodoMVC template"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            setIsEditing(false);
            editTodo(todo.id, (e.target as HTMLInputElement).value);
          }
        }}
      />
    </li>
  );
}
