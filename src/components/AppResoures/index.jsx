import React from 'react';
import './style/index.less';
import { Title } from '../Common/index';
import { Table, Button } from 'antd';
import { artColumns, artData } from './util';

const AppResoures = () => {
  const artPagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  return (
    <>
      <div className="resoures_art">
        <Title title="文章" action={<Button type="primary">更多</Button>} />
        <div style={{ padding: '0 12px' }}>
          <Table
            columns={artColumns}
            dataSource={artData}
            pagination={artPagination}
            scroll={{ y: 'calc(100vh - 700px)' }}
          />
        </div>
      </div>
      <div className="resoures_video">
        <Title title="视频" action={<Button type="primary">更多</Button>} />
        <div style={{ padding: '0 12px' }}>
          <Table
            columns={artColumns}
            dataSource={artData}
            pagination={artPagination}
            scroll={{ y: 'calc(100vh - 700px)' }}
          />
        </div>
      </div>
    </>
  );
};

export default AppResoures;
