import api from './api';

async function signIn({ username, password }) {
  const response = await api.post('/session', { username, password });
  return response.data;
}

async function signUp({ username, email, password }) {
  const response = await api.post('/user', { username, email, password });
  return response.data;
}

export {
  signIn,
  signUp
}