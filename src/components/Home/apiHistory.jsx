import React from 'react';
import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: '操作者',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '发起时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '请求方法',
    dataIndex: 'request',
    key: 'request',
    width: 120,
    ellipsis: true,
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a style={{ color: 'red' }}>删除</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '0',
    name: 'John Brown',
    time: 32,
    request: 'New York No. 1 Lake Park',
  },
];
for (let i = 1; i < 50; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    time: 32,
    request: 'New York No. 1 Lake Park',
  });
}
const ApiHistory = () => {
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  return (
    <>
      <div style={{ padding: '10px 20px', height: 'calc(100% - 40px)' }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          scroll={{ y: 'calc(100vh - 580px)' }}
        />
      </div>
    </>
  );
};

export default ApiHistory;
