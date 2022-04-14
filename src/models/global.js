import { getAllArtic } from '../api/test';
import {
  loginApi,
  getAllTotalApi,
  getUseAppsApi,
  getDownloadApi,
} from '../api/global';
import { history } from 'umi';
import { message } from 'antd';

export default {
  namespace: 'global',
  state: {
    isLoading: true,
  },
  effects: {
    *login({ payload }, { call }) {
      const result = yield call(loginApi, payload);
      if (result.code === 200) {
        sessionStorage.setItem('id', '001');
        history.push('/home');
      } else {
        sessionStorage.setItem('id', '001');
        history.push('/home');
        message.error(result.message);
      }
    },
    *total({ payload }, { call }) {
      console.log(1);
      const result = yield call(getAllTotalApi, payload);
      return result;
    },
    *appUsers({ payload }, { call }) {
      const result = yield call(getUseAppsApi, payload);
      return result;
    },
    *test({ payload }, { call }) {
      //console.log(123);
      const result = yield call(getAllArtic);
      return result;
    },
  },
};
