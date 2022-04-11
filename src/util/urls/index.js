import global from './global';
const init = {
  global,
};

const proxy = '/api';

class Urls {
  constructor(urls) {
    this.init(urls);
  }
  init(urls) {
    for (const type of Object.keys(urls)) {
      const urlObject = {};
      const urlArray = urls[type].urls;
      for (let i = 0; i < urlArray.length; i++) {
        const name = urlArray[i].type;
        const url = proxy + urlArray[i].url;
        Object.assign(urlObject, {
          [name]: url,
        });
      }
      this[urls[type].name] = urlObject;
    }
  }
  get(type) {
    return this[type];
  }
}
const urls = new Urls(init);

export default urls;
