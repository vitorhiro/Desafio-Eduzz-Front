import { makeStyles } from '@material-ui/core';
import { primaryColor } from '../../../../styles/colors';

const useStyles = makeStyles({
  drawer: {
    padding: 10,
  },
  items: {
    background: primaryColor,
    minHeight: '100%',
    minwidth: '100%',
    color: '#fff',
    fontWeight: 'bold',
    padding: 20,
  },
});

export default useStyles;
