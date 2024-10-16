import { Actions } from "../actions/Actions";
import { CreateTodo } from "../create-todo/CreateTodo";

export const Reducer = (initState, { type, payload }) => {
  console.log(type);
  console.log(payload);

  switch (type) {
    case Actions.ADD:
      return [...initState, CreateTodo(payload.title, payload.whatTodo)];
    default:
      return initState;
  }
};
