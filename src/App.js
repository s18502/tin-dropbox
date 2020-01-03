import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import FileBrowser from "./FileBrowser";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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
