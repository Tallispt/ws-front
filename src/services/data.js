import api from './api';

async function detect(data, token) {
  const response = await api.post('/data/detect',
    data,
    {
      headers: { 'Authorization': `Bearer ${token}`, 
      'content-type': 'multipart/form-data' },
    })
  return response.data
}

async function delDetect(id, token) {
  const response = await api.delete(`/data/detect/${id}`,
    {
      headers: { 'Authorization': `Bearer ${token}`}
    })
    return response.data
}


async function getData(id, token) {
  const response = await api.get(`/data/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
  return response.data
}

// async function getUserDatas(token) {
//   const response = await api.get(`/data`,
//     {
//       headers: {
//         'Authorization': `Bearer ${token}`,
//       }
//     })
//   return response.data
// }

async function update(id, data, token) {
  // const response = await api.put(`/data/${id}`,
  //   data,
  //   {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //     }
  //   })
  // return response.data
}

export {
  detect,
  delDetect,
  getData,
  // getUserDatas,
  update,
}