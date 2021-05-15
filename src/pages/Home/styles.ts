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
  cardArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-between',
    padding: 40,
    top: 150,
    position: 'absolute',
  },
});

export default useStyles;
