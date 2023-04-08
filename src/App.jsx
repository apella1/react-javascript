import "./App.css";

import React from "react";
import { State, Reducer, Callback } from "./components";

const App = () => {
  return (
    <div>
      <State />
      <Reducer />
      <Callback />
    </div>
  );
};

export default App;
