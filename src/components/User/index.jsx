import React, { useState } from 'react';
import UserPageSearch from './search';
import UserPageTable from './table';
import { Title } from '../Common';
import './style/index.less';
import UserInformation from './UserInformation';

const User = (props) => {
  const [pilot, setPilot] = useState('userList');
  const [userId, setUserId] = useState('');
  const { dispatch } = props;
  return (
    <>
      {pilot === 'userList' && (
        <div className="user_page">
          <div></div>
          <Title title="用户列表" />
          <UserPageSearch dispatch={dispatch} />
          <UserPageTable setPilot={setPilot} dispatch={dispatch} />
        </div>
      )}
      {pilot === 'userInformation' && (
        <UserInformation setPilot={setPilot} dispatch={dispatch} />
      )}
    </>
  );
};

export default User;
