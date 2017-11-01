/* eslint-disable */
import axios from 'axios';
import {resolveUrl as url} from 'utils';

let request = axios.create();

request.interceptors.request.use(config => {
    config.responseType = 'json';
    config.url = /^(https?|\/\/)/.test(config.url) ? config.url : url(`http://credit.xianjincard.com/${config.url.replace(/^\//, '')}`);
    if(config.method && config.method.toUpperCase() === 'POST'){
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        if(config.data && config.data.toString() === '[object Object]'){
            let data = new FormData();
            for(let i in config.data){
                data.append(i, config.data[i]);
            }
            config.data = data;
        }
    }
    return config;
}, error => {
    return Promise.reject(error);
});

request.interceptors.response.use(response => {
    return Promise.resolve(response.data || {});
}, error => {
    return Promise.reject(error);
});

export default request;