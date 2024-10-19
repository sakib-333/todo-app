import { Actions } from "../actions/Actions";
import { CreateTodo } from "../create-todo/CreateTodo";
import { UpdateTodo } from "../create-todo/UpdateTodo";

export const Reducer = (initState, { type, payload }) => {
  switch (type) {
    case Actions.ADD:
      return [...initState, CreateTodo(payload.title, payload.whatTodo)];

    case Actions.SEARCH:
      return initState.filter((todo) =>
        todo.title.toLowerCase().includes(payload.key)
      );

    case Actions.EDIT:
      return initState.map((todo) =>
        todo.id === payload.id
          ? UpdateTodo(payload.id, payload.title, payload.whatTodo)
          : todo
      );

    case Actions.DELETE:
      return initState.filter((todo) => todo.id !== payload.id);

    case Actions.COMPLETE:
      return initState.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    default:
      return initState;
  }
};
