import { message } from 'antd';
// import { fetch } from 'dva';
const isUrl = (url) => {
  if (typeof url !== 'string') {
    console.error(new Error('it need string'));
    return false;
  }
  return true;
};
const isObject = (obj) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    console.error(new Error('it need object'));
    return false;
  }
  return true;
};
const appendHeaders = (headers, basic) => {
  Object.entries(headers).forEach((e) => {
    basic[e[0]] = e[1];
  });
};
const httpCode = {
  401: 'No Permissions',
  200: 'Ok',
  403: 'Forbidden',
  408: 'Time Out',
};
const Init = {
  headers: {
    'Content-Type': 'application/json',
  },
};
const Methods = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT'];

const resulet = {};

const _fetch = async (url, data, init, type) => {
  if (!isUrl(url)) return;
  if (!isObject(data)) return;
  if (!isObject(init)) return;
  const headers = { ...Init.headers };
  console.log(type);

  if (headers in init) appendHeaders(init.headers, headers);
  const res = await fetch(url, {
    method: type,
    headers,
    body: type === 'POST' ? JSON.stringify(data) : null,
    mode: 'cors',
    cache: 'no-cache',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not Ok,code not in [200 - 299]');
      }
      return response.json();
    })
    .then((res) => {
      return { _url: url, type, headers, ...res };
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error,
      );
    });
  return res;
};
const addMethods = (obj, arr) => {
  arr.forEach((e) => {
    obj[e.toLowerCase()] = (url = '', data = {}, init = {}) => {
      return _fetch(url, data, init, e);
    };
  });
};
class Http {
  constructor() {
    if (window.fetch) {
      console.log('使用封装后的fetch');
      this._fetch();
    } else {
      console.log('启用xhr');
      this._xhr();
    }
  }
  _fetch() {
    addMethods(this, Methods);
  }
  _xhr() {}
}

export default new Http();
// const request = {
//   get: ({ url, par } = {}) => {
//     Object.entries(par).forEach((e) => {
//       Init[e[0]] = e[1];
//     });
//     const obj = {
//       ...init,
//       method: 'GET',
//     };
//     return fetch(url);
//   },
//   post: () => {},
// };
