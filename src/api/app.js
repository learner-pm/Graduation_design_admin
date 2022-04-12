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

export async function getFeedBackList(obj) {
  const url = _url.feedBackList;
  return fetch.post(url, obj);
}
export async function getFeedBackInformation() {
  const url = _url.getFeedBackInformation;
  return fetch.get(url);
}

export async function getAllArticApi(obj) {
  const url = _url.getAllArtic;
  return fetch.post(url);
}

export async function deleteArticApi(obj) {
  const url = _url.deleteArtic;
  return fetch.get(url);
}

export async function addArticApi(obj) {
  const url = _url.addArtic;
  return fetch.post(url, obj);
}

export async function getAllArticInformationApi(obj) {
  const url = _url.getAllArticInformation;
  return fetch.get(url);
}

export async function getAllForumListApi(obj) {
  const url = _url.getAllForumList;
  return fetch.post(url, obj);
}

export async function addForumApi(obj) {
  const url = _url.addForum;
  return fetch.post(url, obj);
}

export async function getForumInformaitonApi(obj) {
  const url = _url.getForumInformaiton;
  return fetch.get(url);
}

export async function deleteForumApi(obj) {
  const url = _url.deleteForum;
  return fetch.get(url);
}

export async function getAppAllTlaksApi() {}
