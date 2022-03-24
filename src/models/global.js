import { getAllArtic } from '../api/test';

export default {
  namespace: 'global',
  state: {
    isLoading: true,
  },
  effects: {
    *test({ payload }, { call }) {
      //console.log(123);
      const result = yield call(getAllArtic);
      return result;
    },
  },
};
