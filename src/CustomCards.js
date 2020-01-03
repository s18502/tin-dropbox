import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import Link from '@material-ui/core/Link';
import { getIcon } from './MimeIcons';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: 150,
    textAlign: "center"
  },
  fileTile: {
    minHeight: 100
  },
  iconTile: {
    minHeight: 100,
    fontSize: 100
  }
});

export function FileCard({ fileName, mime, animationMs = 500 }) {
  const classes = useStyles();

  return (
    <Grow in={true} timeout={animationMs}>
      <Card className={classes.card}>
        <CardActionArea>
          {getIcon(mime, classes.iconTile)}
          {/*<CardMedia*/}
          {/*  className={classes.fileTile}*/}
          {/*  image={fileThumbnail}*/}
          {/*  title={fileName}*/}
          {/*/>*/}
          <CardContent>
            <Typography>{fileName}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
}

export function DirectoryCard({ dirName, onClick, animationMs = 500}) {
  const classes = useStyles();

  function handleClick() {
    onClick(dirName);
  }

  return (
      <Link onClick={handleClick}>
        <Grow in={true} timeout={500}>
          <Card className={classes.card}>
            <CardActionArea>
              <FolderOutlinedIcon className={classes.iconTile} />
              <CardContent>
                <Typography>{dirName}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
      </Link>
  );
}
