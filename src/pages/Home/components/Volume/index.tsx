import { Card, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import api from '../../../../services/api';
import { currencyMask } from '../../../../utils/masks';
import useStyles from './styles';

function Volume({ token }: { token: string }) {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const getBalance = async () => {
    try {
      const { data } = await api.getVolume(token);
      console.log(data);

      // setBuyPrice(currencyMask(data.buy));
      // setSellPrice(currencyMask(data.sell));

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
        <div className={classes.volume}>
          <h3 className={classes.title}>comprados/vendidos</h3>
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

export default connect(mapStateToProps)(Volume);
