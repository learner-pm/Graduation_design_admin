import { connect } from 'dva';
import { useState, useEffect } from 'react';
import { history } from 'umi';

// vue 需求

const IndexPage = (props) => {
  //console.log(props);
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
  return <div>这是首页</div>;
};

export default connect(() => ({}))(IndexPage);
//tc- unit test  amd
//
