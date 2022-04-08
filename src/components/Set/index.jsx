import React from 'react';
import Information from './information';
import InformationTable from './table';
import SetAction from './setAction';

const SetIndex = (props) => {
  return (
    <>
      <SetAction />
      <Information />
      <InformationTable />
    </>
  );
};

export default SetIndex;
