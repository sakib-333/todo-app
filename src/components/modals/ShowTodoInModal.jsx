import React, { useEffect } from "react";

function ShowTodoInModal({ todo, setClickedView }) {
  useEffect(() => {
    Show_Todo_In_Modal.showModal();
  }, []);

  return (
    <dialog
      id="Show_Todo_In_Modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box text-left">
        <h3 className="text-lg font-bold">{todo.title}</h3>
        <p className="py-4 text-justify">{todo.whatTodo}</p>
        <small className="text-[10px]">Created on: {todo.createdTime}</small>
        <div className="modal-action">
          <form method="dialog">
            <button
              type="button"
              className="btn"
              onClick={() => setClickedView((currState) => !currState)}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ShowTodoInModal;
