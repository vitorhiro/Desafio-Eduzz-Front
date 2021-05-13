import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Card, TextField, Button } from '@material-ui/core';

import api from '../../services/api';
import history from '../../services/history';

import { signInSucess } from '../../store/modules/auth/actions';
import Alerts from '../components/Alerts';
import useStyles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [typeError, setTypeError] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogin = async () => {
    try {
      const { data } = await api.signInRequest({ email, password });

      return dispatch(signInSucess(data.token));
    } catch (error) {
      setTypeError('error');
      if (error?.response?.data?.message) {
        setMessageAlert(error?.response?.data?.message);
        setAlertVisible(true);
        return setLoading(false);
      }
      setMessageAlert('Não foi possivel realizar o cadastro.');
      setAlertVisible(true);
      return setLoading(false);
    }
  };

  const handleRegister = () => {
    history.push('/cadastro');
  };

  return loading ? (
    <span>Carregando...</span>
  ) : (
    <Container className={classes.container}>
      <Alerts
        type={typeError}
        state={alertVisible}
        handleClose={() => setAlertVisible(false)}
        message={messageAlert}
      />
      <h1>Login</h1>

      <Card className={classes.card}>
        <div className={classes.inputArea}>
          <TextField
            id="email"
            label="E-mail"
            onChange={e => setEmail(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.inputArea}>
          <TextField
            id="password"
            label="Senha"
            onChange={e => setPassword(e.target.value)}
            className={classes.input}
          />
        </div>

        <Button
          className={classes.button}
          onClick={() => handleLogin()}
          variant="outlined"
          color="primary"
        >
          Entrar
        </Button>
        <Button
          className={classes.button}
          onClick={() => handleRegister()}
          variant="outlined"
          color="primary"
        >
          Cadastre-se
        </Button>
      </Card>
    </Container>
  );
}

export default Login;
