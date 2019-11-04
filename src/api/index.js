import request from './axios'

function requestHandle (res) {
  return new Promise((resolve, reject) => {
    // console.log(res)
    if(res.status == 200 && (!res.data.code || res.data.code == 0)) {
      resolve(res)
    } else {
      // 处理业务代码
      reject(res)
    }
  })
}
export  function apiRequest( obj = { 
  method: 'get'
 }) {
  if (obj.method === 'get' || obj.method === 'GET') {
    obj.method = 'get'
    obj.params = obj.params || obj.data
    delete obj.data
  } else {
    obj.data = obj.data || obj.params
    delete obj.params
  }
  return request(obj).then(res => {
    // console.log('then')
    return requestHandle(res)
  }).catch(err => {
    // console.log('catch', JSON.stringify(err))
    return requestHandle(err)
  })
  
}
export function get (url, params) {
  return apiRequest({
    method: 'get',
    url,
    params
  })
}
export function post (url, data, headers = {}) {
  return apiRequest({
    method: 'post',
    url,
    data,
    params: data,
    headers
  })
}
export function deleted (url, params) {
  return apiRequest({
    method: 'delete',
    url,
    params
  })
}
export function put (url, data) {
  return apiRequest({
    method: 'put',
    url,
    data
  })
}