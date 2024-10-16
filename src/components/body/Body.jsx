import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function Body() {
  const test = useContext(TodoContext);
  console.log(test);

  return <div>Body</div>;
}

export default Body;
