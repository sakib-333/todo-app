import React, { useReducer } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { TodoContext } from "./components/context/TodoContext";
import { Reducer } from "./components/reducer/Reducer";
import { Todos } from "./components/todos/Todos";

function App() {
  const [todos, dispatch] = useReducer(Reducer, Todos);
  return (
    <div className="w-11/12 mx-auto max-w-screen-2xl">
      <Header />
      <TodoContext.Provider value={{ todos, dispatch }}>
        <Body />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
