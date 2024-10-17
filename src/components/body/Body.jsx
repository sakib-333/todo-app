import React from "react";
import AddTodoBtn from "./body-components/add-todo/AddTodoBtn";
import ShowTodos from "./body-components/show-todos/ShowTodos";

function Body() {
  return (
    <div className="min-h-screen">
      <AddTodoBtn />
      <ShowTodos />
    </div>
  );
}

export default Body;
