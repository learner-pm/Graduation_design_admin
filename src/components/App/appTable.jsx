import React from 'react';
import { Table, Input, Space, DatePicker, Button } from 'antd';
import { columns, data } from './util';
const { RangePicker } = DatePicker;
const AppTable = () => {
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  return (
    <>
      <div>
        <div className="app_table_title">用户反馈</div>
        <div className="app-table_search">
          <Space size={12}>
            <Input placeholder="输入关键字" style={{ width: 100 }} />
            <RangePicker showTime />
            <Button type="primary">查询</Button>
          </Space>
        </div>
        <div className="app_table_table">
          <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            scroll={{ y: 'calc((100vh - 440px)' }}
          />
        </div>
      </div>
    </>
  );
};

export default AppTable;
