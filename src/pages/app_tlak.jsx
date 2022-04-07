import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import AppTlak from '../components/AppTlak';
import { Spin, Alert } from 'antd';

const AppTlakPage = (props) => {
  const { dispatch } = props;

  return (
    <>
      <AppTlak dispatch={dispatch} />
    </>
  );
};

export default connect(({ loading, global }) => ({ loading, global }))(
  AppTlakPage,
);
