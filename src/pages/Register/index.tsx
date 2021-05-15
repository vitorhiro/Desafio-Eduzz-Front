import {
  Button,
  Card,
  CircularProgress,
  Container,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  nameIsvValid,
  validateEmail,
  isValidPassword,
} from '../../utils/validators';
import Alerts from '../components/Alerts';
import useStyles from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [typeError, setTypeError] = useState('');
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const handleSignup = async () => {
    if (!nameIsvValid(name)) {
      setErrorName(true);
      setTypeError('warning');
      setMessageAlert('Por favor preencha um nome válido.');
      return setAlertVisible(true);
    }
    if (!validateEmail(email)) {
      setErrorEmail(true);
      setTypeError('warning');
      setMessageAlert('Por favor preencha um e-mail válido.');
      return setAlertVisible(true);
    }
    if (!isValidPassword(password)) {
      setErrorPassword(true);
      setTypeError('warning');
      setMessageAlert('Sua senha deve conter pelo menos 6 caracteres.');
      return setAlertVisible(true);
    }
    if (password !== confirmPassword) {
      setErrorConfirmPassword(true);
      setTypeError('warning');
      setMessageAlert('Senha deve ser igual a confirmação.');
      return setAlertVisible(true);
    }
    try {
      setLoading(true);
      await api.signUpRequest({ name, email, password });
      setLoading(false);

      return setAlertVisible(true);
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
  return loading ? (
    <CircularProgress />
  ) : (
    <Container className={classes.container}>
      <Alerts
        type={typeError}
        state={alertVisible}
        handleClose={() => setAlertVisible(false)}
        message={messageAlert}
      />
      <h1>Cadastro</h1>

      <Card className={classes.card}>
        <div className={classes.inputArea}>
          <TextField
            value={name}
            type="text"
            onChange={e => setName(e.target.value)}
            placeholder="Nome"
            className={classes.input}
            error={errorName}
            onFocus={() => setErrorName(false)}
          />
        </div>
        <div className={classes.inputArea}>
          <TextField
            value={email}
            type="text"
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            className={classes.input}
            error={errorEmail}
            onFocus={() => setErrorEmail(false)}
          />
        </div>
        <div className={classes.inputArea}>
          <TextField
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            className={classes.input}
            error={errorPassword}
            onFocus={() => setErrorPassword(false)}
          />
        </div>
        <div className={classes.inputArea}>
          <TextField
            value={confirmPassword}
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua senha"
            className={classes.input}
            error={errorConfirmPassword}
            onFocus={() => setErrorConfirmPassword(false)}
          />
        </div>

        <Button
          className={classes.button}
          onClick={() => handleSignup()}
          variant="outlined"
          color="primary"
        >
          Entrar
        </Button>

        <div className={classes.inputArea}>
          <Link className={classes.link} to="/">
            Já possuo cadastro.
          </Link>
        </div>
      </Card>
    </Container>
  );
}
