import { useEffect, useState } from "react";

const Effect = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetch("./names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedName, setSelectedName] = useState(null);
  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  useEffect(() => {
    if (selectedName) {
      fetch(`./${selectedName.toLowerCase()}.json`)
        .then((response) => response.json())
        .then((data) => setSelectedNameDetails(data));
    }
  }, [selectedName]);

  return (
    <div>
      <h2>useEffect</h2>
      <div>
        {names.map((name, index) => (
          <button onClick={() => setSelectedName(name)} key={index}>
            {name}
          </button>
        ))}
      </div>
      <button>{selectedName}</button>
      <div>
        <p>Name: {JSON.stringify(selectedNameDetails.name)}</p>
        <p>Age: {JSON.stringify(selectedNameDetails.age)}</p>
      </div>
    </div>
  );
};

export default Effect;

// todo Format JSON objects