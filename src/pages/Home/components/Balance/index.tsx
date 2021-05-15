import { Card, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import api from '../../../../services/api';
import { currencyMask } from '../../../../utils/masks';
import useStyles from './styles';

function Balance({ token }: { token: string }) {
  const [balance, setBalance] = useState('');
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const getBalance = async () => {
    try {
      const { data } = await api.getBalance(token);
      setBalance(currencyMask(data.balance));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={classes.balance}>
          <h3 className={classes.title}>Saldo disponível</h3>
          <span>{balance || '-'}</span>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: { auth: { token: string } }) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Balance);
