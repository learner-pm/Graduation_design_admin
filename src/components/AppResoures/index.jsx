import React, { useState } from 'react';
import './style/index.less';
import { Title } from '../Common/index';
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { artColumns, artData } from './util';
import Search from './search';
import ArticInformation from './ArticInformation';

const AppResoures = () => {
  const [link, setLink] = useState('artic');
  const artPagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  const columns = [
    {
      title: '文章名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <a
          onClick={() => {
            setLink('articInformation');
          }}
        >
          {text}
        </a>
      ),
    },
  ];
  columns.push(...artColumns);
  console.log(columns);
  return (
    <>
      {link === 'artic' && (
        <div className="resoures_art">
          <div className="add_artic">
            <div>
              <p>
                <PlusOutlined style={{ fontSize: '40px' }} />
              </p>
              <p>添加文章</p>
            </div>
          </div>
          <div style={{ marginTop: 0, backgroundColor: 'white' }}>
            <Title title="文章" action={<Button type="primary">更多</Button>} />
            <Search />
            <div style={{ padding: '12px' }}>
              <Table
                columns={columns}
                dataSource={artData}
                pagination={artPagination}
                scroll={{ y: 'calc(100vh - 600px)' }}
              />
            </div>
          </div>
        </div>
      )}

      {link === 'articInformation' && <ArticInformation setLink={setLink} />}
      {/* <div>
        热门文章
        投诉列表

      </div> */}

      {/* <div className="resoures_video">
        <Title title="视频" action={<Button type="primary">更多</Button>} />
        <div style={{ padding: '0 12px' }}>
          <Table
            columns={artColumns}
            dataSource={artData}
            pagination={artPagination}
            scroll={{ y: 'calc(100vh - 700px)' }}
          />
        </div>
      </div> */}
    </>
  );
};

export default AppResoures;
