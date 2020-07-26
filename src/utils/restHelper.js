import { baseURL, defaultToken } from '../constants/default';
import axios from 'axios';
import { get } from './storage';

export const clientPOST = async (method, params, forceUrl = false) => {
  let token = await get('token');
  let headers = { 'Content-Type': 'application/json' };
  if (!token) {
    token = defaultToken;
  }

  headers = { ...headers, 'Authorization': `Bearer ${token}`}

  return await axios({
    method: 'post',
    url: forceurl ? method : baseURL + "/" + method,
    data: params,
    headers: headers
  }).then(res => {
    return new Promise((resolve, reject) => {
      resolve(res.data);
    });
  }).catch(error => {
    return new Promise((resolve, reject) => {
      reject(error);
    })
  });
};

export const clientGET = async (method, params, forceUrl = false) => {
  let token = await get('token');
  let headers = { 'Content-Type': 'application/json' };
  if (!token) {
    token = defaultToken;
  }

  headers = { ...headers, 'Authorization': `Bearer ${token}`}

  return await axios({
    method: 'get',
    url: forceurl ? method : baseURL + "/" + method,
    data: params,
    headers: headers
  }).then(res => {
    return new Promise((resolve, reject) => {
      resolve(res.data);
    });
  }).catch(error => {
    return new Promise((resolve, reject) => {
      reject(error);
    })
  });
}


 