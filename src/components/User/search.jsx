import React from 'react';
import { Input, Space, DatePicker, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;

const { Search } = Input;

const UserPageSearch = (props) => {
  const { dispatch } = props;
  const onSearch = () => {};
  return (
    <>
      <div className="user_page_search">
        <Space size={12}>
          <Input placeholder="输入关键字" style={{ width: 160 }} />
          <RangePicker showTime />
          <Button type="primary" onClick={onSearch}>
            查询
          </Button>
        </Space>
      </div>
    </>
  );
};

export default UserPageSearch;
