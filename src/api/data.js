import fetch from '../util/request';
import urls from '../util/urls';

const _url = urls.get('data');

export async function getBodyList(obj) {
  const url = _url.bodyList;
  return fetch.post(url, obj);
}

export async function addRuleApi(obj) {
  const url = _url.addRule;
  return fetch.post(url, obj);
}

export async function getPeopleAgeApi(obj) {
  const url = _url.getPeopleAge;
  return fetch.post(url);
}

export async function getHealthyApi() {
  const url = _url.getHealthy;
  return fetch.post(url);
}

export async function getRunListApi(obj) {
  const url = _url.getRunList;
  return fetch.post(url);
}
