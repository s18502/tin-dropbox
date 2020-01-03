import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles({
  card: {
    minWidth: 100,
    textAlign: "center"
  },
  fileTile: {
    minHeight: 100
  },
  dirTile: {
    minHeight: 100,
    fontSize: 100
  }
});

export function FileCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.fileTile}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title={props.fileName}
        />
        <CardContent>
          <Typography>{props.fileName}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function DirectoryCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <FolderIcon className={classes.dirTile} />
        <CardContent>
          <Typography>{props.dirName}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
