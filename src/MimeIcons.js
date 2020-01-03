import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import MovieIcon from '@material-ui/icons/Movie';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import React from 'react';

export function getIcon(mime, classToApply) {
  if(!mime) {
    return <InsertDriveFileIcon className={classToApply} />
  }

  console.log(mime)

  if(mime.startsWith('image')) {
    return <ImageIcon className={classToApply} />
  }

  if(mime.startsWith('text')) {
    return <DescriptionRoundedIcon className={classToApply} />
  }

  if(mime.startsWith('video')) {
    return <MovieIcon className={classToApply} />
  }

  if(mime.startsWith('audio')) {
    return <AudiotrackIcon className={classToApply} />
  }

  return <InsertDriveFileIcon className={classToApply} />
}
