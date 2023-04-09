import "./App.css";

import React from "react";
import { State, Reducer, Callback, Effect, Ref } from "./components";

const App = () => {
  console.log("App rendered")
  return (
    <div>
      <Ref />
      <Effect />
      <State />
      <Reducer />
      <Callback />
    </div>
  );
};

export default App;
