import React from "react";
import AddTodoBtn from "./body-components/add-todo/AddTodoBtn";
import ShowTodos from "./body-components/show-todos/ShowTodos";
import SearchTodoField from "./body-components/search-todo/SearchTodoField";

function Body() {
  return (
    <div className="min-h-screen">
      <div className="my-4 space-y-4 md:space-y-0 md:flex md:justify-between">
        <SearchTodoField />
        <AddTodoBtn />
      </div>
      <ShowTodos />
    </div>
  );
}

export default Body;
