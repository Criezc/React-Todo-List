import React from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  return (
    // paper disini menggantikan div class container dan frame
    // yang di link dari Paper.jsx
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
};

export default TodoList;
