import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../../context/TodoContext";
import ShowTodoInModal from "../../../modals/ShowTodoInModal";
import EditTodoInModal from "../../../modals/EditTodoInModal";
import DeleteTodoModal from "../../../modals/DeleteTodoModal";
import { Actions } from "../../../actions/Actions";

function ShowTodos() {
  let todoSequence = 1;
  const { todos, dispatch } = useContext(TodoContext);
  const [clickedView, setClickedView] = useState(false);
  const [clickedEdit, setClickedEdit] = useState(false);
  const [clickedDelete, setClickedDelete] = useState(false);
  const [clickedID, setClickedID] = useState(null);

  function handleCompleteTodo(id) {
    dispatch({ type: Actions.COMPLETE, payload: { id } });
  }

  function handleViewTodo(ID) {
    setClickedView((currState) => !currState);
    setClickedID(() => ID);
  }
  function handleEditTodo(ID) {
    setClickedEdit((currState) => !currState);
    setClickedID(() => ID);
  }
  function handleDeleteTodo(ID) {
    setClickedDelete((currState) => !currState);
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
            <label
              className="flex items-center justify-center"
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "",
                opacity: todo.isCompleted ? "0.45" : "1",
              }}
            >
              <input
                type="checkbox"
                defaultChecked={todo.isCompleted}
                className="checkbox checkbox-sm mr-2"
                onChange={() => handleCompleteTodo(todo.id)}
              />
              {todo.isCompleted ? "Yes" : "No"}
            </label>
            <button
              className="btn btn-outline btn-success"
              onClick={() => handleViewTodo(todo.id)}
            >
              View
            </button>
            <button
              className="btn btn-outline btn-warning"
              onClick={() => handleEditTodo(todo.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-outline btn-error"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
            <div>
              {clickedView && clickedID === todo.id && (
                <ShowTodoInModal todo={todo} setClickedView={setClickedView} />
              )}
              {clickedEdit && clickedID === todo.id && (
                <EditTodoInModal todo={todo} setClickedEdit={setClickedEdit} />
              )}
              {clickedDelete && clickedID === todo.id && (
                <DeleteTodoModal
                  todo={todo}
                  setClickedDelete={setClickedDelete}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowTodos;
