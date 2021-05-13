import { Snackbar } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import MuiAlert from '@material-ui/lab/Alert';

import React from 'react';
import { AlertsComponentTypes } from '../../Types';

export default function Alerts({
  type,
  state,
  handleClose,
  message,
}: AlertsComponentTypes) {
  const Alert = (props: any) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={state}
      TransitionComponent={Fade}
      key={Fade.name}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
