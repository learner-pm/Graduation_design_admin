import fetch from '../util/request';
import urls from '../util/urls/index';
import _ from 'lodash';
const _url = urls.get('user');

export async function getUserInformationApi(obj) {
  const url = _.replace(_url.getUserInformation, '{id}', obj.id);
  return fetch.post(url, obj);
}

export async function getUserListApi(obj) {
  const url = _url.getUserList;
  return fetch.post(url, obj);
}

export async function disableUserApi(obj) {
  const url = _.replace(_url.disableUser, '{id}', obj.id);
  return fetch.get(url);
}
