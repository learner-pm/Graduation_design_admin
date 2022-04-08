import React from 'react';
import { connect } from 'dva';
import DataList from '../components/DataList/index';

const DataListPage = (props) => {
  const { dispatch } = props;
  return (
    <>
      <DataList dispatch={dispatch} />
    </>
  );
};

export default connect(() => ({}))(DataListPage);
