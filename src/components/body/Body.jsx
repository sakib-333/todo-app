import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Actions } from "../actions/Actions";

function Body() {
  const { todos, dispatch } = useContext(TodoContext);

  return <div onClick={() => dispatch({ type: Actions.ADD })}>Body</div>;
}

export default Body;
