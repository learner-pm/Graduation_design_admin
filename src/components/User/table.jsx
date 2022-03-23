import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { columns, data } from './util';

const UserPageTable = () => {
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  return (
    <>
      <div className="user_page_table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          scroll={{ y: 'calc((100vh - 440px)' }}
        />
      </div>
    </>
  );
};

export default UserPageTable;
