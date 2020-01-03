import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import FileBrowser from "./FileBrowser";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  control: {
    padding: theme.spacing(2)
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  fileIcon: {
    minHeight: 70,
    minWidth: 70
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(10),
    right: theme.spacing(10)
  }
}));

function App() {
  let classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <FileBrowser />
    </div>
  );
}

export default App;
