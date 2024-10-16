import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../../context/TodoContext";

function ShowTodos() {
  let todoSequence = 1;
  const { todos } = useContext(TodoContext);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="mx-auto">
      <div className="text-center grid grid-cols-6 border-b-2">
        <h1 className="font-bold">#</h1>
        <h1 className="font-bold">Title</h1>
        <h1 className="font-bold">Completed</h1>
        <h1 className="font-bold">View</h1>
        <h1 className="font-bold">Edit</h1>
        <h1 className="font-bold">Delete</h1>
      </div>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="text-center grid grid-cols-6 gap-2 items-center py-3 border-b"
          >
            <h1>{todoSequence++}</h1>
            <h1>{todo.title}</h1>
            <label className="flex items-center justify-center">
              <input
                type="checkbox"
                defaultChecked={todo.isCompleted}
                className="checkbox checkbox-sm mr-2"
              />
              {todo.isCompleted ? "Yes" : "No"}
            </label>
            <button className="btn btn-outline btn-success">View</button>
            <button className="btn btn-outline btn-warning">Edit</button>
            <button className="btn btn-outline btn-error">Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ShowTodos;
