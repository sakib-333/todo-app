import React, { useState } from "react";
import AddNewTodoModal from "../../../modals/AddNewTodoModal";

function AddTodoBtn() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div>
      <button
        className="btn btn-outline w-full"
        onClick={() => setIsShowing((currState) => !currState)}
      >
        Add New Todo
      </button>
      {isShowing && <AddNewTodoModal setIsShowing={setIsShowing} />}
    </div>
  );
}

export default AddTodoBtn;
