import React, { useState, useEffect } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import '../style/userInformation.less';
import { Title } from '../../Common/index';
import { columns, data } from '../util';

const img = require('./my.jpg');

const UserInformation = (props) => {
  const { setPilot, dispatch } = props;
  useEffect(() => {
    const information = dispatch({
      type: 'user/information',
      payload: {},
    });
  }, []);
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  const tableColumns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
  ];
  tableColumns.push(...columns);
  return (
    <>
      <div className="user_information_title">
        <div onClick={() => setPilot('userList')}>
          <LeftOutlined style={{ color: '#00000073' }} />
        </div>
        <p>用户详情</p>
      </div>
      <div style={{ height: 220, marginTop: 10 }}>
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
          <div className="user_page_table">
            <Table
              columns={tableColumns}
              dataSource={data}
              pagination={pagination}
              scroll={{ y: 'calc((100vh - 620px)' }}
            />
          </div>
          {/* <div>关注/被关注</div>
          <div>发言趋势</div>
          <div>跑步</div>
          <div></div> */}
        </div>
      </div>
    </>
  );
};

export default UserInformation;
