import React from 'react';
import { Table, Tag, Space } from 'antd';
import { columns, data } from './util';

const InformationTable = () => {
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  return (
    <>
      <div className="set_information_table">
        <p>管理员列表</p>
        <div style={{ padding: '12px 20px', backgroundColor: 'white' }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            scroll={{ y: 'calc((100vh - 640px)' }}
          />
        </div>
      </div>
    </>
  );
};

export default InformationTable;
