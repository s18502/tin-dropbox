import React from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FileCard, DirectoryCard } from "./CustomCards";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";

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
  appBarSpacer: theme.mixins.toolbar,
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

function FileBrowser({ tree }) {
  let classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {tree.children.map(value => (
                <Grid key={value.name} item>
                  {renderFileTreeNode(value)}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Container>
    </main>
  );
}

function renderFileTreeNode(node) {
  if (node.type === "file") {
    return (
      <FileCard
        fileName={node.name}
        fileThumbnail="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
      />
    );
  } else {
    return <DirectoryCard dirName={node.name} />;
  }
}

export default connect(
  state => ({
    tree: state.fileTree
  }),
  dispatch => ({
    onMessageClick: message => {
      dispatch({ type: "click", message });
    }
  })
)(FileBrowser);
