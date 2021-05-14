import { makeStyles } from '@material-ui/core';
import { primaryColor, textColor } from '../../styles/colors';

const useStyles = makeStyles({
  container: {
    background: primaryColor,
    color: textColor,
    height: '100vh',
    minWidth: '100%',
    padding: 0,
  },
});

export default useStyles;
