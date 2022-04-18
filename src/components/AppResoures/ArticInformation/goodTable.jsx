import React from 'react';
import { Table, Tag, Space } from 'antd';
const GoodTable = () => {
  const artPagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  const artColumns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      //render: (text) => <a onClick={() => {}}>{text}</a>,
    },
    {
      title: 'Uuid',
      dataIndex: 'uuid',
      key: 'uuid',
    },
    {
      title: '点赞时间',
      dataIndex: 'creatTime',
      key: 'creatTime',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>取消</a>
        </Space>
      ),
    },
  ];

  const artData = [
    {
      key: '0',
      name: 'John Brown',
      uuid: 'dsadsa0dsa12da0',
      creatTime: '2020 12 12',
      times: 12,
      liked: 0,
      collected: 'one',
      tags: [0],
    },
  ];

  for (let i = 1; i < 40; i++) {
    artData.push({
      key: i,
      name: 'John Brown' + i,
      uuid: 'dsadsa0dsa12da0' + i,
      creatTime: '2020 12 12',
      times: 12,
      liked: i * 10,
      collected: 'one',
      tags: [i % 2 === 0 ? 0 : 1],
    });
  }
  return (
    <>
      <Table
        columns={artColumns}
        dataSource={artData}
        pagination={artPagination}
        scroll={{ y: 'calc(100vh - 610px)' }}
      />
    </>
  );
};

export default GoodTable;
