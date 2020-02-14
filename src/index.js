import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./state";
import App from "./app";
import "./index.scss";

export function Index() {
  let initialState = {
    darkState: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "flip":
        return {
          ...state,
          darkState: action.darkState
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
