import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { Actions } from "../actions/Actions";
import AddTodoBtn from "./body-components/add-todo/AddTodoBtn";

function Body() {
  const { todos, dispatch } = useContext(TodoContext);

  useEffect(() => {
    todos.map((todo) => console.log(todo));
  }, [todos]);

  return (
    <>
      <AddTodoBtn />
    </>
  );
}

export default Body;
