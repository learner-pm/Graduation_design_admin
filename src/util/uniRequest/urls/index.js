import app from './app';
import { replace } from '../util';

const urls = {
  app,
};
const apiRoot = 'https://xxx';
class Url {
  constructor(urls) {
    this.init(urls);
  }
  inir(urls) {
    for (const namespace of Object.keys(urls)) {
      const obj = {};
      const urlArray = urls[namespace].urls;
      for (let i = 0; i < urlArray.length; i++) {
        Object.assign(obj, {
          [urlArray[i].name]: apiRoot + [urlArray[i].url],
        });
      }
      this[urls[namespace].namespace] = obj;
    }
  }
  get(name) {
    return this[name];
  }
}

const url = new Url(urls);
export default url;
