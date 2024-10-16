import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../../context/TodoContext";
import ShowTodoInModal from "../../../modals/ShowTodoInModal";

function ShowTodos() {
  let todoSequence = 1;
  const { todos } = useContext(TodoContext);
  const [clickedView, setClickedView] = useState(false);
  const [clickedID, setClickedID] = useState(null);

  function handleViewTodo(ID) {
    setClickedView((currState) => !currState);
    setClickedID(() => ID);
  }

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
            <button
              className="btn btn-outline btn-success"
              onClick={() => handleViewTodo(todo.id)}
            >
              View
            </button>
            <button className="btn btn-outline btn-warning">Edit</button>
            <button className="btn btn-outline btn-error">Delete</button>
            <div>
              {clickedView && clickedID === todo.id && (
                <ShowTodoInModal todo={todo} setClickedView={setClickedView} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowTodos;
