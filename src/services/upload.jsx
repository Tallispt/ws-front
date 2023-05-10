import api from './api';

async function upload(data) {
  const response = await api.post('/data', data, {
    headers: {
      'Content-Type': data.type
    }
  })
  
  return response.data
}

export {
  upload
}