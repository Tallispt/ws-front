import api from './api';

async function getUserResultData(token) {
  const response = await api.get('/result',
    {
      headers: { 'Authorization': `Bearer ${token}`},
    })
  return response.data
}

async function getResult(id, token) {
  const response = await api.get(`/result/${id}`,
    {
      headers: { 'Authorization': `Bearer ${token}`},
    })
  return response.data
}

async function save(data, token) {
  const response = await api.post('/result', 
  data,
  {
    headers: { 'Authorization': `Bearer ${token}`},
  });
  return response.data;
}

async function delResult(id, token) {
  const response = await api.delete(`/result/${id}`,
    {
      headers: { 'Authorization': `Bearer ${token}`}
    })
    return response.data
}


export {
  getUserResultData,
  getResult,
  save,
  delResult
}