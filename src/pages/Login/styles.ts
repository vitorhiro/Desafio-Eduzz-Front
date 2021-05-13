import { makeStyles } from '@material-ui/core';
import { primaryColor, textColor } from '../../styles/colors';

const useStyles = makeStyles({
  container: {
    background: primaryColor,
    color: textColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    minWidth: '100%',
  },
  card: {
    minWidth: '50%',
    minHeight: 250,
    display: 'flex',
    flexDirection: 'column',
    padding: 40,
    margin: 20,
  },
  inputArea: {
    marginBottom: 20,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
  },
  button: {
    marginBottom: 20,
  },
});

export default useStyles;
