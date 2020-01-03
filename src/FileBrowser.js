import React from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FileCard, DirectoryCard } from "./CustomCards";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ACTIONS, TYPE_FILE } from './Constants';
import { findByPath } from './SearchTree';

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
  breadcrumbs: {
    paddingBottom: theme.spacing(2)
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

function FileBrowser({ items, currentPath, onDirClick, changeDir }) {
  let classes = useStyles();

  function breadCrumbClicked(idx) {
    let absPath = currentPath.slice(0, idx + 1);
    changeDir(absPath);
  }

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />

      <Container maxWidth="lg" className={classes.container}>
        <Typography color="textPrimary">Current path</Typography>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          {currentPath.map((p, idx) => (
            <Link key={p} color="inherit" href="#" onClick={() => breadCrumbClicked(idx)} >
              {p} {idx}
            </Link>
          ))}
        </Breadcrumbs>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {items.map(value => (
                <Grid key={value.name} item>
                  {renderFileTreeNode(value, onDirClick)}
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

function renderFileTreeNode(node, onDirClick) {
  if (node.type === TYPE_FILE) {
    return (
      <FileCard
        fileName={node.name}
        fileThumbnail="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
      />
    );
  } else {
    return <DirectoryCard dirName={node.name} onClick={onDirClick} />;
  }
}

export default connect(
  state => ({
    items: findByPath(state.currentPath, state.fileTree),
    currentPath: state.currentPath
  }),
  dispatch => ({
    onDirClick: dirName => {
      const action = { type: ACTIONS.GO_TO_DIR, dirName };
      dispatch(action);
    },
    changeDir: absolutePath => {
      const action = { type: ACTIONS.CHANGE_DIR, absolutePath };
      dispatch(action);
    }
  })
)(FileBrowser);
