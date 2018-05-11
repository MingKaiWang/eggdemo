/**
 * Created by 若水医疗 on 2018/2/23 6:17 PM.
 */

import axios from 'axios'

const chronicAxios = axios.create({
  responseType: 'json',
})

chronicAxios.interceptors.response.use(function (response) {
  if (response.data && response.data.status === 500) {
    return Promise.reject()
  }
  if (response.data && response.data.status === 429) {
    console.warn('请求重复：', response)
    return Promise.reject()
  }
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default chronicAxios
