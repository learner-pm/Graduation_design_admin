import React from 'react';
import { connect } from 'dva';
import AppResoures from '../components/AppResoures';

const AppResouresPage = (props) => {
  const { dispatch } = props;
  return (
    <>
      <AppResoures dispatch={dispatch} />
    </>
  );
};

export default connect(() => ({}))(AppResouresPage);
