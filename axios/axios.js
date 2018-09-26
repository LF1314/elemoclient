import axios from 'axios'
import {
  promises
} from 'fs';
import {
  resolve
} from 'path';
import {
  rejects
} from 'assert';

const instance = axios.create({
  baseURL: '/admin',
  timeout: 10000
});

const axi = {
  get(url, data, methods = 'get', config) {
    return new Promise((resolve, rejects) => {
      instance[methods](url, {
        params: data
      }, config).then(res => {
        resolve(res)
      }).catch(error => {
        rejects(error)
      })
    })
  },
  post(url, data, methods = 'post', config) {
    return new Promise((resolve, rejects) => {
      instance[methods](url, {
        data
      }, config).then(res => {
        resolve(res)
      }).catch(error => {
        rejects(error)
      })
    })
  }


}

export const $axios = axi
