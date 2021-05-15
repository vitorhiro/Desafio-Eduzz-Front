import axios from 'axios';
import { signInDataType, signUpDataType } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default {
  async signInRequest(data: signInDataType) {
    const response = await api.post('/login', data);

    return response;
  },

  async signUpRequest(data: signUpDataType) {
    const response = await api.post('/account', data);

    return response;
  },

  async getBalance(token: string) {
    const response = await api.get('/account/balance', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  },

  async getBtcPrice(token: string) {
    const response = await api.get('/btc/price', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  },

  async getVolume(token: string) {
    const response = await api.get('/volume', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  },
};
