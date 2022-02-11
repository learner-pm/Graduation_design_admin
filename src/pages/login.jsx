import React, { useState } from 'react';
import { connect } from 'dva';
import Login from '../components/Login';

const LoginPage = (props) => {
  const { dispatch } = props;
  return <Login dispatch={dispatch} />;
};

export default connect(() => ({}))(LoginPage);
