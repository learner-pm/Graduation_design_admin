import fetch from '../util/request';
import urls from '../util/urls/index';

const _url = urls.get('user');

export async function getUserInformationApi(obj) {
  const url = _url.getUserInformation;
  return fetch.post(url, obj);
}

export async function getUserListApi(obj) {
  const url = _url.getAdminList;
  return fetch.post(url, obj);
}

export async function disableUserApi(obj) {
  const url = _url.deleteAdmin;
  return fetch.get(url);
}
