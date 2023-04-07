import { useState } from "react";
import "./App.css";

function NameList() {
  const [list, setList] = useState(["Jack", "John", "Mercy"]);
  const [name, setName] = useState("");
  
  function onAddName() {
    setList([...list, name])
    setName("")
  }

  return (
    <div>
      <ul>
        {list.map((name, id) => (
          <li key={id}>{name}</li>
        ))}
      </ul>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count: {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
