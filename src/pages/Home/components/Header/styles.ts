import { makeStyles } from '@material-ui/core';
import { secondaryColor } from '../../../../styles/colors';

const useStyles = makeStyles(theme => ({
  header: {
    background: secondaryColor,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default useStyles;
