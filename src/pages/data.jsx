import React from 'react';
import { connect } from 'dva';
import Data from '../components/Data';

const DataPage = (props) => {
  const { dispatch } = props;
  return (
    <>
      <Data dispatch={dispatch} />
    </>
  );
};

export default connect(() => ({}))(DataPage);
