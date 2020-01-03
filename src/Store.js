import { findByPath } from './SearchTree';
import { ACTIONS, TYPE_DIRECTORY, TYPE_FILE } from './Constants';
import { createStore } from 'redux';

function reducer(state, action) {
  function insertUnderCurrentPath(item) {
    const newTree = JSON.parse(JSON.stringify(state.fileTree));
    const currentNode = findByPath(state.currentPath, newTree);
    currentNode.push(item);
    currentNode.sort((a, b) => a.name.localeCompare(b.name));
    return { ...state, fileTree: newTree };
  }

  switch (action.type) {
    case ACTIONS.CHANGE_DIR:
      return {...state, currentPath: action.absolutePath}
    case ACTIONS.GO_TO_DIR:
      return { ...state, currentPath: state.currentPath.concat([action.dirName]) };
    case ACTIONS.NEW_DIR:
      return insertUnderCurrentPath({
        name: action.name,
        type: TYPE_DIRECTORY,
        children: [],
      });
    case ACTIONS.FILE_UPLOAD:
      return insertUnderCurrentPath({
        name: action.file.fileName,
        mime: action.file.fileType,
        type: TYPE_FILE
      });
    case ACTIONS.SEARCH:
      return {...state, searchPhrase: action.phrase};
    default:
      return state;
  }
}
export default  createStore(reducer, {
  currentPath: ["home"],
  fileTree: {
    name: "home",
    type: TYPE_DIRECTORY,
    children: [
      {
        name: "drugi katalog",
        type: TYPE_DIRECTORY,
        children: [
          {
            name: "inny plik.jpg",
            mime: "image/jpg",
            type: TYPE_FILE
          }
        ]
      },
      {
        name: "filmik.mp4",
        type: TYPE_FILE,
        mime: "video/mp4"
      },
      {
        name: "fotka.jpg",
        type: TYPE_FILE,
        mime: "image/jpg"
      },
      {
        name: "ipsum.bin",
        type: TYPE_FILE
      },
      {
        name: "katalog",
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
      },
      {
        name: "lorem.bin",
        type: TYPE_FILE
      },
      {
        name: "nieznany.bin",
        type: TYPE_FILE
      },
      {
        name: "tekst.txt",
        type: TYPE_FILE,
        mime: "text/plain"
      },
      {
        name: "test.bin",
        type: TYPE_FILE
      },
      {
        name: "trzeci katalog",
        type: TYPE_DIRECTORY,
        children: []
      }
    ]
  }
});
