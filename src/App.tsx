import { useReducer, useState } from "react";
import "./App.css";
import "./assets/css/base.css";
import "./assets/css/index.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import { TodoItemObject } from "./component/TodoItem";
import AppContext from "./contexts/AppContext";
import todosReducer from "./reducers/todos.reducer";

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

  // const [todos, setTodos] = useState<TodoItemObject[]>(data);
  const [todos, dispatch] = useReducer(todosReducer, data);
  const [filter, setFilter] = useState<string>("all");

  const toggleCompleted = (id: number) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: { id } });
  };

  const toggleAllCompleted = (completed: boolean) => {
    // const updatedTodos = todos.map((todo) => ({ ...todo, completed }));
    // setTodos(updatedTodos);
    dispatch({ type: "TOGGLE_ALL_COMPLETED", payload: completed });
  };

  const addTodo = (title: string) => {
    // const newTodo = { id: Date.now(), title, completed: false };
    // setTodos([...todos, newTodo]);
    dispatch({ type: "ADD_TODO", payload: { title } });
  };

  const deleteTodo = (id: number) => {
    // const updatedTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(updatedTodos);
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const editTodo = (id: number, title: string) => {
    // const updatedTodos = todos.map((todo) =>
    //   todo.id === id ? { ...todo, title } : todo
    // );
    // setTodos(updatedTodos);
    dispatch({ type: "EDIT_TODO", payload: { id, title } });
  };

  const clearCompletedTodos = () => {
    // const updatedTodos = todos.filter((todo) => !todo.completed);
    // setTodos(updatedTodos);
    dispatch({ type: "CLEAR_COMPLETED_TODOS" });
  };

  const selectAllTodos = (deed: string) => {
    setFilter(deed);
  };

  const selectActiveTodos = (deed: string) => {
    setFilter(deed);
  };

  const selectCompletedTodos = (deed: string) => {
    setFilter(deed);
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        filter,
        toggleCompleted,
        toggleAllCompleted,
        addTodo,
        deleteTodo,
        editTodo,
        clearCompletedTodos,
        selectAllTodos,
        selectActiveTodos,
        selectCompletedTodos,
      }}
    >
      <section className="todoapp">
        <Header />
        <Main />
        <Footer />
      </section>
    </AppContext.Provider>
  );
}

export default App;
