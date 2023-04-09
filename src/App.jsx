import "./App.css";

import React from "react";
import { State, Reducer, Callback, Effect } from "./components";

const App = () => {
  console.log("App rendered")
  return (
    <div>
      <Effect />
      <State />
      <Reducer />
      <Callback />
    </div>
  );
};

export default App;
