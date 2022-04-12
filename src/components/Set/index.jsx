import React from 'react';
import Information from './information';
import InformationTable from './table';
import SetAction from './setAction';

const SetIndex = (props) => {
  const { dispatch } = props;
  return (
    <>
      <SetAction dispatch={dispatch} />
      <Information dispatch={dispatch} />
      <InformationTable dispatch={dispatch} />
    </>
  );
};

export default SetIndex;
