import http from '../http';
import urls from '../urls/index';

const url = urls.get('app');

export function getApp(data) {
  return http(url.getApp, data);
}

//user this.getApp({})
