import React, { useState } from 'react';
import { connect } from 'dva';
import Basis from './basic';

const LayoutsPage = (props) => {
  const { children, location } = props;
  if (location.pathname === '/' || location.pathname === '/login')
    return <div style={{ height: '100%' }}>{children}</div>;

  return (
    <>
      <Basis location={location}>{children}</Basis>
    </>
  );
};

export default connect(() => ({}))(LayoutsPage);
