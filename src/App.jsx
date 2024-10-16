import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { TodoContext } from "./components/context/TodoContext";

function App() {
  return (
    <div className="w-11/12 mx-auto max-w-screen-2xl">
      <Header />
      <TodoContext.Provider value="cat">
        <Body />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
