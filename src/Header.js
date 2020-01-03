import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Slide } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}));

function Header() {
  let classes = useStyles();

  return (
    <Slide direction={'down'} in={true}>
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          "Dropbox"
        </Typography>
      </Toolbar>
    </AppBar>
    </Slide>
  );
}

export default Header;
