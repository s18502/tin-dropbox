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
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDials from './SpeedDials';

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
  appBarSpacer: theme.mixins.toolbar
}));

function FileBrowser({ items, currentPath, onDirClick, onChangeDir, onNewDir }) {
  let classes = useStyles();

  function breadCrumbClicked(idx) {
    let absPath = currentPath.slice(0, idx + 1);
    onChangeDir(absPath);
  }

  function handleDirCreation() {
    const dirName = prompt("Please enter new directory name", "March 2020");
    if(dirName) {
      onNewDir(dirName);
    }
  }

  return (
    <main className={classes.content}>
      <div id="drop_zone" draggable="true" onDragEnter={console.log} onDrop={console.log}>

      <div className={classes.appBarSpacer} />

      <Container maxWidth="lg" className={classes.container}>
        <Typography color="textPrimary">Current path</Typography>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          {currentPath.map((p, idx) => (
            <Link key={p} color="inherit" href="#" onClick={() => breadCrumbClicked(idx)} >
              {p}
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

        <SpeedDials onUpload={() => console.log("upload")} onDirCreated={handleDirCreation} />

      </Container>
      </div>
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
    onChangeDir: absolutePath => {
      const action = { type: ACTIONS.CHANGE_DIR, absolutePath };
      dispatch(action);
    },
    onNewDir: name => {
      const action = { type: ACTIONS.NEW_DIR, name };
      dispatch(action);
    }
  })
)(FileBrowser);
