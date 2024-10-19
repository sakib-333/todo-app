import React, { useContext } from "react";
import { TodoContext } from "../../../context/TodoContext";
import { Actions } from "../../../actions/Actions";

function SearchTodoField() {
  const { dispatch } = useContext(TodoContext);

  function handleSearch(e) {
    dispatch({
      type: Actions.SEARCH,
      payload: { key: e.target.value.toLowerCase() },
    });
  }
  return (
    <input
      type="text"
      placeholder="Search todo..."
      className="input input-bordered input-primary w-full md:max-w-xs"
      onChange={(e) => handleSearch(e)}
    />
  );
}

export default SearchTodoField;
