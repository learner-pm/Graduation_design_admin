import fetch from '../util/request';
import urls from '../util/urls/index';

const _url = urls.get('app');

export async function getAppInformationApi(obj) {
  const url = _url.getAppInformation;
  return fetch.post(url, obj);
}

export async function getAppHostWordsApi(obj) {
  const url = _url.getAppHostWords;
  return fetch.post(url, obj);
}

export async function getAppToUser(obj) {
  const url = _url.getAppToUser;
  return fetch.get(url);
}

export async function getAppAllTlaksApi() {}
