import { useMemo, useState } from "react";

// useMemo - use calculated values
// Avoiding recomputation of the operation when the page is rendered
// the dependency array as the next argument

const Callback = () => {
  const [numbers, setNumbers] = useState([2, 4, 6, 9]);
  const total = useMemo(
    () => numbers.reduce((currentAcc, num) => currentAcc + num, 0),
    [numbers]
  );
  const [names] = useState(["Jack", "Bill", "Allen", "Lopez"]);
  const sortedNames = useMemo(() => [...names].sort(), [names]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // not a good use of useMemo as the computation leads to a scalar
  const countTotal = useMemo(() => count1 + count2, [count1, count2]);
  // an efficient way would be 
  const effCountTotal = count1 + count2
  return (
    <>
      <h2>Callback Hook</h2>
      <div>
        <p>Total: {total}</p>
        <p>Names: {names.join(", ")}</p>
        <p>Sorted Names: {sortedNames.join(", ")}</p>
        <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
        <p>Count Total: {countTotal}</p>
        <p>Other Total: {effCountTotal}</p>
      </div>
    </>
  );
};

export default Callback;
