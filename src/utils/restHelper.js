import { baseURL } from '../constants/default';
import axios from 'axios';
import { get } from './storage';
import { navigate } from '../navigationRef';

export const clientPOST = async (method, params, forceUrl = false) => {
  const token = await get('token');
  let headers = { 'Content-Type': 'application/json' };
  if (!token) {
    navigate('LoginStack');
  } 

  headers = { ...headers, 'Authorization': `Bearer ${token}`}

  return await axios({
    method: 'post',
    url: forceUrl ? method : baseURL + "/" + method,
    data: params,
    headers: headers
  }).then(res => {
    return new Promise((resolve, reject) => {
      resolve(res.data);
    });
  }).catch(error => {
    return new Promise((resolve, reject) => {
      reject(error.response);
    })
  });
};

export const clientGET = async (method, params, forceUrl = false) => {
  const token = await get('token');
  
  let headers = {};
  if (!token) {
    navigate('LoginStack');
  }

  headers = { ...headers, 'Authorization': `Bearer ${token}`}
  let url = forceUrl ? method : baseURL + "/" + method;
  
  return await axios({
    method: 'get',
    url: url,
    params: params,
    headers: headers
  }).then(res => {
    return new Promise((resolve, reject) => {
      resolve(res.data);
    });
  }).catch(error => {
    return new Promise((resolve, reject) => {
      reject(error.response);
    })
  });
}


 