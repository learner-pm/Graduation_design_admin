import React from 'react';
import { connect } from 'dva';
import SetIndex from '../components/Set';

const SetPage = (props) => {
  const { dispatch } = props;
  return (
    <>
      <SetIndex dispatch={dispatch} />
    </>
  );
};

export default connect(() => ({}))(SetPage);
