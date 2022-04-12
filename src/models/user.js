import { history } from 'umi';
import { message } from 'antd';
import {
  disableUserApi,
  getUserInformationApi,
  getUserListApi,
} from '../api/user';

export default {
  namespace: 'user',
  state: {},
  effects: {
    *list({ payload }, { call }) {
      const result = yield call(getUserListApi, payload);
      return result;
    },
    *information({ payload }, { call }) {
      const result = yield call(getUserInformationApi, payload);
      return result;
    },
    *disable({ payload }, { call }) {
      const result = yield call(disableUserApi, payload);
      return result;
    },
  },
};
