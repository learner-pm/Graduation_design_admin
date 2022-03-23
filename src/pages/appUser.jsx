import React from 'react';
import { connect } from 'dva';
import User from '../components/User';

const UserPage = (props) => {
  const { dispatch } = props;
  return (
    <>
      <User dispatch={dispatch} />
    </>
  );
};

export default connect(() => ({}))(UserPage);
