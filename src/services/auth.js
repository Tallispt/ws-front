import api from './api';

async function signIn(username, password) {
  console.log(username)
  const response = await api.post('/sign-in', { username, password });
  console.log(response.data)
  console.log(response.status)
  return response.data;
}

async function signUp(username, email, password) {
  const response = await api.post('/sign-up', { username, email, password });
  return response.data;
}

export {
  signIn,
  signUp
}