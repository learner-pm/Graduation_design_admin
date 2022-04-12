import fetch from '../util/request';
import urls from '../util/urls/index';

const _url = urls.get('global');

export async function loginApi(obj) {
  const url = _url.login;
  return fetch.post(url, obj);
}

export async function getAllTotalApi() {
  const url = _url.getAllTotal;
  return fetch.get(url);
}
export async function getAppUsersApi() {
  const url = _url.getAppUsers;
  return fetch.get(url);
}

export async function getDownloadApi() {
  const url = _url.getDownload;
  return fetch.get(url);
}

// export async function getUseAppsApi() {
//   const url = _url.getUseApps;
//   return fetch.get(url);
// }
