import React from 'react';
import { connect } from 'dva';
import DataRun from '../components/DataRun/index';

const DataRunPage = (props) => {
  const { dispatch } = props;
  return (
    <>
      <DataRun dispatch={dispatch} />
    </>
  );
};

export default connect(() => ({}))(DataRunPage);
