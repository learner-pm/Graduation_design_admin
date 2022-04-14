import React from 'react';
import { Table, Input, Space, DatePicker, Button } from 'antd';
const { RangePicker } = DatePicker;
const Search = () => {
  return (
    <>
      <div className="app_resoure_search">
        <Space size={12}>
          <Input placeholder="输入关键字" style={{ width: 100 }} />
          <RangePicker showTime />
          <Button type="primary">查询</Button>
        </Space>
      </div>
    </>
  );
};

export default Search;
