import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import '../style/userInformation.less';
import { Title } from '../../Common/index';

const img = require('./my.jpg');

const UserInformation = (props) => {
  const { setPilot } = props;

  return (
    <>
      <div className="user_information_title">
        <div onClick={() => setPilot('userList')}>
          <LeftOutlined style={{ color: '#00000073' }} />
        </div>
        <p>用户详情</p>
      </div>
      <div style={{ height: 220 }}>
        <Title title="基础信息" />
        <div className="user_information">
          <div className="user_information_col">
            <div>
              <span>用户名 ：</span>大苏打
            </div>
            <div>
              <span>密码等级 ：</span>2020/12/12
            </div>
            <div>
              <span>注册时间 ：</span>大苏打
            </div>
          </div>
          <div className="user_information_col">
            <div>
              <span>Uuid ：</span>大苏打
            </div>
            <div>
              <span>年龄 ：</span>2020/12/12
            </div>
            <div>
              <span>最后上线时间 ：</span>大苏打
            </div>
          </div>
          <div
            className="user_information_col"
            style={{ justifyContent: 'center' }}
          >
            <img src={img} alt="头像" />
          </div>
        </div>
      </div>
      <div
        style={{
          height: 'calc(100% - 260px)',
          marginTop: 10,
          backgroundColor: 'white',
        }}
      >
        <Title title="相关信息" />
        <div className="user_information_ohter">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default UserInformation;
