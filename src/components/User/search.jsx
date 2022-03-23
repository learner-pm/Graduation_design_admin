import React from 'react';
import { Input, Space, DatePicker, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;
const { RangePicker } = DatePicker;
const UserPageSearch = () => {
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className="user_page_search">
        <Space size={12}>
          <Input placeholder="输入关键字" style={{ width: 100 }} />
          <RangePicker showTime />
          <Button type="primary">查询</Button>
        </Space>
      </div>
    </>
  );
};

export default UserPageSearch;
