import { loginApi } from '../api/test';
import { history } from 'umi';
import { message } from 'antd';

export default {
  namespace: 'user',
  state: {},
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
  },
};
