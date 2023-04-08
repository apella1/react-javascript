import "./App.css";

import React from "react";
import { State, Reducer, Callback } from "./components";

const App = () => {
  console.log("App rendered")
  return (
    <div>
      <State />
      <Reducer />
      <Callback />
    </div>
  );
};

export default App;
