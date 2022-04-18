import React, { useState } from 'react';
import { Timeline, Button, Drawer, Table, Space } from 'antd';

const AppSearch = () => {
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  const columns = [
    {
      title: '内容',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '频率',
      dataIndex: 'numbers',
      key: 'numbers',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (text, record) => (
        <Space size="middle">
          {/* <a>查看</a> */}
          <a>删除</a>
        </Space>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      ke: i,
      name: 'dsad' + i,
      numbers: '1212',
    });
  }
  const hostKeyList = [];
  for (let i = 1; i < 10; i++) {
    hostKeyList.push({
      id: i,
      ctn: '内容' + i,
      index: i,
    });
  }
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer
        title="搜索热词"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          scroll={{ y: 'calc((100vh - 80px)' }}
        />
      </Drawer>
      <div className="app_numbers_div">
        <p
          style={{
            fontSize: 16,
            borderBottom: '1px solid #e8e9eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          App搜索热词
          <Button type="primary" size="small" onClick={showDrawer}>
            更多
          </Button>
        </p>
        <div className="host_list">
          {hostKeyList.map((e) => (
            <p
              key={e.id}
              style={{
                padding: '0 20px',
                margin: 0,
                height: '26px',
                lineHeight: '28px',
                marginTop: '4px',
                fontSize: '14px',
              }}
            >
              <span>{e.index} </span>: {e.ctn}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppSearch;
