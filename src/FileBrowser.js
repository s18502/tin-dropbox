import React from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FileCard, DirectoryCard } from "./CustomCards";
import Fab from "@material-ui/core/Fab";

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

function FileBrowser() {
  let classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {[
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                14,
                15,
                16,
                17,
                18,
                19
              ].map(value => (
                <Grid key={value} item>
                  <FileCard fileName={`file${value}.jpg`} />
                </Grid>
              ))}
              <Grid key="fsd" item>
                <DirectoryCard dirName="test" />
              </Grid>

              <Grid key="fsd2" item>
                <DirectoryCard dirName="test2" />
              </Grid>
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

export default FileBrowser;
