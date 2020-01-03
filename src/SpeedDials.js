import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "absolute",
    bottom: theme.spacing(10),
    right: theme.spacing(10),
  },
  hiddenFileInput: {
    display: 'none'
  }
}));

export default function SpeedDials({onUpload, onDirCreated}) {
  const classes = useStyles();

  const handleFileUpload = () => {
    document.getElementById('file-input').click();
  };

  const actions = [
    { icon: <CloudUploadIcon />, name: 'Upload file', handler: handleFileUpload },
    { icon: <CreateNewFolderIcon />, name: 'New directory', handler: onDirCreated }
  ];

  const [direction] = React.useState('up');
  const [open, setOpen] = React.useState(false);

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

  function handleFileChanged() {
    let file = document.getElementById('file-input').files[0];
    if(file) {
      onUpload({fileName: file.name, fileType: file.type})
    }
  }

  return (
      <div className={classes.wrapper}>
        <input id="file-input" type="file" name="name" className={classes.hiddenFileInput} onChange={handleFileChanged} />

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