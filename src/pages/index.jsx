import { connect } from 'dva';
import { useState, useEffect } from 'react';
import { history } from 'umi';
import Home from '../components/Home';

const IndexPage = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    const data = dispatch({
      type: 'global/test',
      payload: {},
    }).then((response) => response.json());
    data.then((res) => {
      console.log(res);
    });
  }, []);
  const loginOut = () => {
    sessionStorage.removeItem('id');
    history.push('/');
  };
  return (
    <>
      <Home dispatch={dispatch} />
    </>
  );
};

export default connect(() => ({}))(IndexPage);
