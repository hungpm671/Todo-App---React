import { useState } from "react";
import "./App.css";
import "./assets/css/base.css";
import "./assets/css/index.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import { TodoItemObject } from "./component/TodoItem";

function App() {
  const data = [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Make dinner",
      completed: true,
    },
    {
      id: 3,
      title: "Prepare presentation",
      completed: true,
    },
    {
      id: 4,
      title: "Review project progress",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState<TodoItemObject[]>(data);
  const [state, setState] = useState<string>("all");

  const toggleCompleted = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleAllCompleted = (completed: boolean) => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed }));
    setTodos(updatedTodos);
  };

  const addTodo = (title: string) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id: number, title: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title } : todo
    );
    setTodos(updatedTodos);
  };

  const clearCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const selectAllTodos = (deed: string) => {
    setState(deed);
  };

  const selectActiveTodos = (deed: string) => {
    setState(deed);
  };

  const selectCompletedTodos = (deed: string) => {
    setState(deed);
  };

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main
        todos={todos}
        filter={state}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      <Footer
        todos={todos}
        filter={state}
        selectAllTodos={selectAllTodos}
        selectActiveTodos={selectActiveTodos}
        selectCompletedTodos={selectCompletedTodos}
        clearCompletedTodos={clearCompletedTodos}
      />
    </section>
  );
}

export default App;
