import React from 'react';
import UserPageSearch from './search';
import UserPageTable from './table';
import './style/index.less';

const User = (props) => {
  const { dispatch } = props;
  return (
    <>
      <div className="user_page">
        <div className="user_list">用户数据</div>
        <UserPageSearch />
        <UserPageTable />
      </div>
    </>
  );
};

export default User;
