import React, { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { HomeModelState } from '@/models/home';
import { ConnectState } from '@/models/connect';
import Home from './components/HomeLoading';
import styles from './index.less';

interface Props {
  dispatch: Dispatch;
  data: HomeModelState;
}

const App: React.FC<Props> = (props) => {
  const {
    dispatch,
    data
  } = props;

  useEffect(() => {
    if (dispatch) {
      dispatch({ type: 'home/fetch' });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Home data={data} />
    </div>
  )
}

export default connect(({ home }: ConnectState) => ({
  data: home,
}))(App);

