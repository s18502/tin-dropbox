import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
// Reducer
function counter(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
let store = createStore(counter, {
  fileTree: {
    name: "home",
    type: "directory",
    children: [
      {
        name: "test.jpg",
        type: "file"
      },
      {
        name: "test2.jpg",
        type: "file"
      },
      {
        name: "test dir",
        type: "directory",
        children: [
          {
            name: "test3.jpg",
            type: "file"
          },
          {
            name: "test4.jpg",
            type: "file"
          }
        ]
      }
    ]
  }
});

const mountNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
