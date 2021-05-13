import React, { useState } from 'react';
import api from '../../services/api';
import history from '../../services/history';
import Alerts from '../components/Alerts';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [typeError, setTypeError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setTypeError('warning');
      setMessageAlert('Todos os dados são obrigatórios');
      return setAlertVisible(true);
    }
    if (password !== confirmPassword) {
      setTypeError('warning');
      setMessageAlert('Senha deve ser igual a confirmação.');
      return setAlertVisible(true);
    }
    try {
      setLoading(true);
      await api.signUpRequest({ name, email, password });
      setLoading(false);
      setTypeError('success');
      setMessageAlert('Usuário criado com sucesso!');
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
    <span>Carregando...</span>
  ) : (
    <div>
      <Alerts
        type={typeError}
        state={alertVisible}
        handleClose={() => setAlertVisible(false)}
        message={messageAlert}
      />
      <header>
        <button type="button" onClick={() => history.push('/')}>
          Retornar
        </button>
        Cadastro
      </header>
      <div>
        <input
          value={name}
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          value={email}
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <input
          value={confirmPassword}
          type="password"
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirme sua senha"
        />
        <button onClick={() => handleSignup()} type="submit">
          Entrar
        </button>
      </div>
    </div>
  );
}
