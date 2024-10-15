import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";

export type TodoItemObject = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoItemProps = {
  todo: TodoItemObject;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const { toggleCompleted, deleteTodo, editTodo } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  return (
    <li
      className={`${todo.completed ? "completed" : ""} ${
        isEditing ? "editing" : ""
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>{todo.title}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
      <div>
        <input
          className="edit"
          defaultValue={todo.title}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" || e.keyCode === 13) {
              setIsEditing(false);
              editTodo(todo.id, (e.target as HTMLInputElement).value);
            }
          }}
        />
        <button
          className={isEditing ? "destroy" : ""}
          style={{ display: isEditing ? "block" : "none" }}
          onClick={() => setIsEditing(false)}
        ></button>
      </div>
    </li>
  );
}
