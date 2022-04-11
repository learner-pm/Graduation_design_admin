import React from 'react';
import { Table } from 'antd';
import { columns, data } from './util';

const DataRun = () => {
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  const toInformation = () => {
    //setPilot('userInformation');
  };
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
      <div style={{ padding: 12 }}>
        <Table
          columns={tableColumns}
          dataSource={data}
          pagination={pagination}
          scroll={{ y: 'calc((100vh - 670px)' }}
        />
      </div>
    </>
  );
};

export default DataRun;
