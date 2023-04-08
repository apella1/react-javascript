import { useCallback, useMemo, useState } from "react";

function SortedList({ list, sortFunc }) {
  console.log("Sorted list render");
  const sortedList = useMemo(() => {
    // the list sort happens twice because the list is mounted twice
    console.log("Running sort");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);
  return <div>{sortedList.join(" , ")}</div>;
}

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
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // not a good use of useMemo as the computation leads to a scalar
  const countTotal = useMemo(() => count1 + count2, [count1, count2]);
  // an efficient way would be
  const effCountTotal = count1 + count2;

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (
    <>
      <h2>Callback Hook</h2>
      <div>
        <p>Total: {total}</p>
        <p>Names: {names.join(", ")}</p>
        <SortedList list={names} sortFunc={sortFunc} />
        <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
        <p>Count Total: {countTotal}</p>
        <p>Other Total: {effCountTotal}</p>
      </div>
    </>
  );
};

export default Callback;
