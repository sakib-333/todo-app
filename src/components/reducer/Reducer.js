import { Actions } from "../actions/Actions";
import { CreateTodo } from "../create-todo/CreateTodo";
import { UpdateTodo } from "../create-todo/UpdateTodo";

export const Reducer = (initState, { type, payload }) => {
  switch (type) {
    case Actions.ADD:
      return [...initState, CreateTodo(payload.title, payload.whatTodo)];

    case Actions.EDIT:
      const updateTodo = UpdateTodo(
        payload.id,
        payload.title,
        payload.whatTodo
      );
      return initState.map((todo) =>
        todo.id === payload.id ? updateTodo : todo
      );

    default:
      return initState;
  }
};
