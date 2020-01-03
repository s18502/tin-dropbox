import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { TYPE_FILE, TYPE_DIRECTORY, ACTIONS } from './Constants';
import { findByPath } from './SearchTree';

// Reducer
function counter(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_DIR:
      return {...state, currentPath: action.absolutePath}
    case ACTIONS.GO_TO_DIR:
      return { ...state, currentPath: state.currentPath.concat([action.dirName]) };
    case ACTIONS.NEW_DIR:
      const newTree = JSON.parse(JSON.stringify(state.fileTree))
      const currentNode = findByPath(state.currentPath, newTree)
      currentNode.push({
        name: action.name,
        type: TYPE_DIRECTORY,
        children: []
      });
      return { ...state, fileTree: newTree };
    default:
      return state;
  }
}
let store = createStore(counter, {
  currentPath: ["home"],
  fileTree: {
    name: "home",
    type: TYPE_DIRECTORY,
    children: [
      {
        name: "JEDEN1.jpg",
        type: TYPE_FILE
      },
      {
        name: "JEDEN2.jpg",
        type: TYPE_FILE
      },
      {
        name: "test dir",
        type: TYPE_DIRECTORY,
        children: [
          {
            name: "DWA1.jpg",
            type: TYPE_FILE
          },
          {
            name: "DWA2.jpg",
            type: TYPE_FILE
          },
          {
            name: "DIR DWA",
            type: TYPE_DIRECTORY,
            children: [
              {
                name: "TRZY1.jpg",
                type: TYPE_FILE
              }
            ]
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
