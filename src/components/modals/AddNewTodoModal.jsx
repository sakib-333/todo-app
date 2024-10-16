import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { Actions } from "../actions/Actions";

function AddNewTodoModal({ setIsShowing }) {
  const { dispatch } = useContext(TodoContext);

  function handleAddNewTodo(e) {
    e.preventDefault();
    const title = e.target[0].value;
    const whatTodo = e.target[1].value;
    dispatch({ type: Actions.ADD, payload: { title, whatTodo } });
    e.target[0].value = "";
    e.target[1].value = "";

    setIsShowing((currState) => !currState);
  }

  useEffect(() => {
    Add_New_Todo_Modal.showModal();
  }, []);

  return (
    <dialog id="Add_New_Todo_Modal" className="modal modal-middle">
      <div className="modal-box">
        <form
          className="my-4 flex flex-col space-y-4"
          onSubmit={(e) => handleAddNewTodo(e)}
        >
          <input
            type="text"
            placeholder="Todo title"
            className="input input-bordered input-info w-full"
            required
          />
          <textarea
            className="textarea textarea-info"
            placeholder="What to do..."
            rows={5}
            required
          ></textarea>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsShowing((currState) => !currState)}
              className="btn btn-outline btn-success"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-outline btn-error">
              Add
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default AddNewTodoModal;
