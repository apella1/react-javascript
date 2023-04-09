import { useEffect, useRef, useState } from "react";

const Ref = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    // inputRef is just a pointer(reference) to the current state
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);
  const [names, setNames] = useState([
    { id: idRef.current++, name: "Jay" },
    { id: idRef.current++, name: "Pete" },
  ]);
  const onAddName = () => {
    setNames([...names, { id: idRef.current++, name: inputRef.current.value }]);
    inputRef.current.value = "";
  };

  // * uncontrolled inputs
  return (
    <div>
      <h2>Ref</h2>
      <ul>
        {names.map((person, index) => (
          <li key={index}>
            {person.id} - {person.name}
          </li>
        ))}
      </ul>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
};

export default Ref;
