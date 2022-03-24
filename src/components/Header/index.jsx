import React, { useState } from 'react';
import { Menu, Dropdown, Button, Badge } from 'antd';
import { DownOutlined, BellOutlined } from '@ant-design/icons';
import { history } from 'umi';
import './index.less';

const AppHeader = (props) => {
  const { title } = props;
  const [dotFlag, setDotFlag] = useState(false);
  const loginOut = () => {
    sessionStorage.removeItem('id');
    history.push('/');
  };

  const url = require('./img/my.jpg');
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          个人资料
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          修改密码
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          添加管理员
        </a>
      </Menu.Item>
      <Menu.Item danger onClick={loginOut}>
        Sign Out
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <p></p>
      <div className="app_header_div">
        <Badge dot={dotFlag}>
          <BellOutlined style={{ fontSize: 16 }} />
        </Badge>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <img src={url} alt="adminImg" className="adminImg" />
            admin
            <DownOutlined style={{ fontSize: 14, margin: '0 4px' }} />
          </a>
        </Dropdown>
        {/* <img src="./img/my.jpg" alt="管理员头像" />
        <Button type="primary" onClick={loginOut}>
          Sign Out
        </Button> */}
      </div>
    </>
  );
};

export default AppHeader;
