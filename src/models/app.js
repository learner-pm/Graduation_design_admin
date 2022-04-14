import { getAppInformationApi, getAppVersion } from '../api/app';

export default {
  namespace: 'app',
  state: {},
  effects: {
    *basic({ payload }, { call }) {
      const result = yield call(getAppInformationApi, payload);
      return result;
    },
    *version({ payload }, { call }) {
      const result = yield call(getAppVersion);
      return result;
    },
  },
};
