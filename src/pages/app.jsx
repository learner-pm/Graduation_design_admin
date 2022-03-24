import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import App from '../components/App';
import { Spin, Alert } from 'antd';

const AppPage = (props) => {
  const { dispatch } = props;

  return (
    <>
      <App dispatch={dispatch} />
    </>
  );
};

export default connect(({ loading, global }) => ({ loading, global }))(AppPage);
