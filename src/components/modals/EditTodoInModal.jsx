import React, { useContext, useEffect } from "react";
import { Actions } from "../actions/Actions";
import { TodoContext } from "../context/TodoContext";

function EditTodoInModal({ todo, setClickedEdit }) {
  const { dispatch } = useContext(TodoContext);
  
  function handleUpdateTodo(e) {
    e.preventDefault();
    const title = e.target[0].value;
    const whatTodo = e.target[1].value;
    const id = todo.id;

    dispatch({ type: Actions.EDIT, payload: { id, title, whatTodo } });
    e.target[0].value = "";
    e.target[1].value = "";

    setClickedEdit((currState) => !currState);
  }
  useEffect(() => {
    Edit_Todo_Modal.showModal();
  }, []);

  return (
    <dialog id="Edit_Todo_Modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form
          className="my-4 flex flex-col space-y-4"
          onSubmit={(e) => handleUpdateTodo(e)}
        >
          <input
            type="text"
            placeholder="Todo title"
            className="input input-bordered input-info w-full"
            required
            defaultValue={todo.title}
          />
          <textarea
            className="textarea textarea-info"
            placeholder="What to do..."
            rows={5}
            required
            defaultValue={todo.whatTodo}
          ></textarea>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setClickedEdit((currState) => !currState)}
              className="btn btn-outline btn-success"
            >
              Cancel
            </button>
            <button className="btn btn-outline btn-error">Update</button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default EditTodoInModal;
