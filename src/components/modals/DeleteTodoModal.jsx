import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { Actions } from "../actions/Actions";

function DeleteTodoModal({ todo, setClickedDelete }) {
  const { dispatch } = useContext(TodoContext);
  useEffect(() => {
    Delete_Todo_Modal.showModal();
  }, []);

  function handleDeleteTodo(id) {
    setClickedDelete((s) => !s);
    dispatch({ type: Actions.DELETE, payload: { id } });
  }

  return (
    <dialog id="Delete_Todo_Modal" className="modal modal-middle text-left">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Warning</h3>
        <p className="py-4">{todo.title} will be deleted!</p>
        <p className="py-4">Are you sure? </p>
        <div className="flex justify-end space-x-3">
          <button
            className="btn btn-outline"
            onClick={() => setClickedDelete((s) => !s)}
          >
            Cancel
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default DeleteTodoModal;
