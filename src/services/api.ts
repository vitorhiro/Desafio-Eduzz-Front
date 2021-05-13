import axios from 'axios';
import { signInDataType, signUpDataType } from './types';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default {
  async signInRequest(data: signInDataType) {
    const response = await api.get('/login', { data });

    return response;
  },

  async signUpRequest(data: signUpDataType) {
    const response = await api.post('/account', data);

    return response;
  },
};
