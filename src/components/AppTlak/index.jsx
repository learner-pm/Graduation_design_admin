import React from 'react';
import './style/index.less';
import { Title } from '../Common/index';
import { Table, Button, Input, Space, DatePicker } from 'antd';
import { Columns, Data } from './util';
import { PlusOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;

const AppTlak = () => {
  const Pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  return (
    <>
      <div>
        <div className="add_artic">
          <div>
            <p>
              <PlusOutlined style={{ fontSize: '40px' }} />
            </p>
            <p>添加帖子</p>
          </div>
        </div>
        <Title title="论坛列表" />
        <div className="app_tlak_filter">
          <Space size={12}>
            <Input placeholder="输入关键字" style={{ width: 160 }} />
            <RangePicker showTime />
            <Button type="primary">查询</Button>
          </Space>
        </div>
        <div
          style={{
            padding: '0 12px',
            backgroundColor: 'white',
            height: 'calc(100% - 280px)',
          }}
        >
          <Table
            columns={Columns}
            dataSource={Data}
            pagination={Pagination}
            scroll={{ y: 'calc(100vh - 600px)' }}
          />
        </div>
      </div>
    </>
  );
};

export default AppTlak;
