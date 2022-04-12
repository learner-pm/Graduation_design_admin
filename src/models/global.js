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
        history.push('/home');
        sessionStorage.setItem('id', '001');
        message.error(result.message);
      }
      //return result;
    },
    *total({ payload }, { call }) {
      console.log(1);
      const result = yield call(getAllTotalApi, payload);
      return result;
    },
    *total({ payload }, { call }) {
      console.log(1);
      const result = yield call(getAllTotalApi, payload);
      return result;
    },
    *test({ payload }, { call }) {
      //console.log(123);
      const result = yield call(getAllArtic);
      return result;
    },
  },
};
