import {
  creatAdminApi,
  deleteAdminApi,
  getAdminInformationApi,
  getAdminListApi,
} from '../api/admin';

export default {
  namespace: 'admin',
  state: {},
  effects: {
    *getList({ payload }, { call }) {
      const result = yield call(getAdminListApi, payload);
      return result;
    },
    *getInformation({ payload }, { call }) {
      const result = yield call(getAdminInformationApi, payload);
      return result;
    },
    *deleteAdmin({ payload }, { call }) {
      const result = yield call(deleteAdminApi, payload);
      return result;
    },
    *creat({ payload }, { call }) {
      const result = yield call(creatAdminApi, payload);
      return result;
    },
  },
};
