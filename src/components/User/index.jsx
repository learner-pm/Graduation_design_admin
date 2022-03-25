import React from 'react';
import UserPageSearch from './search';
import UserPageTable from './table';
import { Title } from '../Common';
import './style/index.less';

const User = (props) => {
  const { dispatch } = props;
  return (
    <>
      <div className="user_page">
        <Title title="用户数据" />
        <UserPageSearch />
        <UserPageTable />
      </div>
    </>
  );
};

export default User;
