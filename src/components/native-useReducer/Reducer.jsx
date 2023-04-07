import { useReducer } from "react";

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <label htmlFor="first">First Name</label>
      <input
        id="first"
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <label htmlFor="last">Last Name</label>
      <input
        id="last"
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <p>First:{state.first}</p>
      <p>Last:{state.last}</p>
    </div>
  );
}

const NameList = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload }; // payload is data being sent to the server(db e.t.c)
          break;
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          }; // payload is data being sent to the server(db e.t.c)
          break;

        default:
          break;
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <div>
      <div>
        <h3>Names</h3>
        <ul>
          {state.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  );
};

const Reducer = () => {
  return (
    <div>
      <h2>Reducer Hook</h2>
      <NameList />
      <UserForm />
    </div>
  );
};

export default Reducer;
