import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import App from "./app";
import "./index.css";

export function Index() {
  let initialState = {
    null: ''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "null":
        return {
          ...state,
          null: action.null
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
