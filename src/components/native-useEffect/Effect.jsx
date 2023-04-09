import { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // ? why is there a need to clear the interval
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    // clearing the interval to make the timer solid
    // a great interview question to showcase react skills
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Time: {time}</p>
    </div>
  );
};

const Effect = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetch("./names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`./${name.toLowerCase()}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div>
      <h2>useEffect</h2>
      <StopWatch />
      <div>
        {names.map((name, index) => (
          <button onClick={() => onSelectedNameChange(name)} key={index}>
            {name}
          </button>
        ))}
      </div>
      <div>
        <p>Name: {JSON.stringify(selectedNameDetails.name)}</p>
        <p>Age: {JSON.stringify(selectedNameDetails.age)}</p>
      </div>
    </div>
  );
};

export default Effect;

// todo Format JSON objects
