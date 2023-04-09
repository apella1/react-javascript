# Concepts

- Setting the value of a return just sets the local copy
- When you return by value you get a reference to the value not the actual value
- State is coupled with the instance of an object
- Scalars and objects(Arrays)
- Spreading action and dispatch in useReducer
- Observing state vs mutating state

## Review Hub

- Closures
- Array methods
- Spread operator
- Returning array values

### useReducer

- useReducer is a way of managing more complex state

### useMemo

- useMemo is used for complex computations
- Creating an array or object(results of the operation)
- Stabilizing references

### Myths around useMemo

- Connected to React Memo - not related
- Performance killer(from classic memoization) - useMemo is single level memoization

## useCallback

- Used to stabilize reference to a function
- Used when the callback(onClick etc.) goes onto a nested component as a property
- Stabilizing references sent to a React component
- Useful when creating custom hooks

## useEffect

- Used a lot to make API requests
- What happens when useEffect depends on the data that it writes?
- Closures with useEffect
- Callback function given to useEffect can return a clean up function

## useRef

- Changing the value of reference doesn't cause the component to rerender
- Used to get a reference to an HTML element(primary use)
- Used to maintain state without doing any updates
- Uncontrolled inputs in React
