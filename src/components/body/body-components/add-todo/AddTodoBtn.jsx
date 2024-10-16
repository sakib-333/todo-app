import React, { useState } from "react";
import AddNewTodoModal from "../../../modals/AddNewTodoModal";

function AddTodoBtn() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="flex justify-end">
      <button
        className="btn btn-outline"
        onClick={() => setIsShowing((currState) => !currState)}
      >
        Add New Todo
      </button>
      {isShowing && <AddNewTodoModal setIsShowing={setIsShowing}/>}
    </div>
  );
}

export default AddTodoBtn;
