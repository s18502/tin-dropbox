import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "absolute",
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  }
}));



export default function SpeedDials({onUpload, onDirCreated}) {
  const classes = useStyles();

  const actions = [
    { icon: <CloudUploadIcon />, name: 'Upload file', handler: onUpload },
    { icon: <CreateNewFolderIcon />, name: 'New directory', handler: onDirCreated }
  ];

  const [direction] = React.useState('up');
  const [open, setOpen] = React.useState(false);
  const [hidden] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  function handleClick(handler) {
    handler();
    handleClose();
  }

  return (
      <div className={classes.wrapper}>
        <SpeedDial
          ariaLabel="SpeedDial"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleClick(action.handler)}
            />
          ))}
        </SpeedDial>
      </div>
  );
}