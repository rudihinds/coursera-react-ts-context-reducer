import React from "react";

const initialState = { count: 0 };

// we don't have dispatch until later, inside an rfc
const ctx = React.createContext<null | typeof initialState>(null);

function Provider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <ctx.Provider value={{ state, dispatch }} {...props} />;
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "add":
      return { count: state.count + action.payload };
    case "minus":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

export function App() {
  return (
    <Provider>
      <Counter />;
    </Provider>
  );
}

function Counter() {
  const { state, dispatch } = React.useContext(ctx);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "add", payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "minus", payload: 5 })}>
        +5
      </button>
    </div>
  );
}
