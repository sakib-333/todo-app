import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import AddTodoBtn from "./body-components/add-todo/AddTodoBtn";
import ShowTodos from "./body-components/show-todos/ShowTodos";

function Body() {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <>
      <AddTodoBtn />
      <ShowTodos />
    </>
  );
}

export default Body;
