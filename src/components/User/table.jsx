import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { columns, data } from './util';

const UserPageTable = (props) => {
  const { setPilot } = props;
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  const toInformation = () => {
    setPilot('userInformation');
  };
  console.log(columns);
  const tableColumns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a onClick={toInformation}>{text}</a>,
    },
  ];
  tableColumns.push(...columns);
  return (
    <>
      <div className="user_page_table">
        <Table
          columns={tableColumns}
          dataSource={data}
          pagination={pagination}
          scroll={{ y: 'calc((100vh - 460px)' }}
        />
      </div>
    </>
  );
};

export default UserPageTable;
