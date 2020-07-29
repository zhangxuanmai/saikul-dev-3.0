import { Effect, Reducer } from 'umi';
import { fetchIndexData } from '@/services/home';


export interface HomeModelState {
  [key: string]: any
} 

export interface HomeModelType {
  namespace: 'home';
  state: HomeModelState;
  effects: {
    fetch: Effect;
  },
  reducers: {
    saveState: Reducer<HomeModelState>;
  }
}

const HomeModel: HomeModelType = {
  namespace: 'home',
  state: {
    data: {}
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(fetchIndexData);
      yield put({
        type: 'saveState',
        payload: response,
      });
    },
  },
  reducers: {
    saveState(state, action) {
      return {
        ...state,
        data: action.payload || {},
      };
    },
  }
}

export default HomeModel;
