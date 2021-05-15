import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  volume: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
});

export default useStyles;
