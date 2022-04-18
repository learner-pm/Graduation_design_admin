import React from 'react';
import { Timeline, Button, Drawer, Table, Space } from 'antd';
import { Title } from '../Common';
const BodyList = () => {
  const pagination = {
    defaultCurrent: 1,
    //showSizeChanger: true,
    pageSize: 10,
  };
  const columns = [
    {
      title: '模板名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '时间',
      dataIndex: 'numbers',
      key: 'numbers',
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      render: (text, record) => (
        <Space size="middle">
          <a>删除</a>
        </Space>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      ke: i,
      name: 'dsad' + i,
      numbers: '1212',
    });
  }
  return (
    <>
      <div>
        <Title title="参数列表" />
        <div style={{ padding: 12 }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 'calc((100vh - 760px)' }}
          />
        </div>
      </div>
    </>
  );
};
export default BodyList;
