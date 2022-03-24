import React from 'react';
import { connect } from 'dva';
import AppRun from '../components/AppRun';

const AppRunPage = (props) => {
  const { dispatch } = props;
  return (
    <>
      <AppRun dispatch={dispatch} />
    </>
  );
};

export default connect(() => ({}))(AppRunPage);
