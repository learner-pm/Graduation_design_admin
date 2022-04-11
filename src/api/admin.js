import fetch from '../util/request';
import urls from '../util/urls/index';

const _url = urls.get('admin');

export async function getAdminInformationApi(obj) {
  const url = _url.getUserInformation;
  return fetch.post(url, obj);
}

export async function getAdminListApi(obj) {
  const url = _url.getAdminList;
  return fetch.post(url, obj);
}

export async function deleteAdminApi(obj) {
  const url = _url.deleteAdmin;
  return fetch.get(url);
}

export async function creatAdminApi(obj) {
  const url = _url.creatAdmin;
  return fetch.post(url, obj);
}
