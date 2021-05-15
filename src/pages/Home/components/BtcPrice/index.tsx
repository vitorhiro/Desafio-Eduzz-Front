import { Card, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import api from '../../../../services/api';
import { currencyMask } from '../../../../utils/masks';
import useStyles from './styles';

function BtcPrice({ token }: { token: string }) {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const getBalance = async () => {
    try {
      const { data } = await api.getBtcPrice(token);
      setBuyPrice(currencyMask(data.buy));
      setSellPrice(currencyMask(data.sell));

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
        <div className={classes.prices}>
          <h3 className={classes.title}>Cotação do Bitcoin</h3>

          <span>Compra: {buyPrice || '-'}</span>

          <span>Venda: {sellPrice || '-'}</span>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: { auth: { token: string } }) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(BtcPrice);
