import api from './api';

async function upload(data) {
  const response = await api.post('/data', data)
  return response.data
}

export {
  upload
}