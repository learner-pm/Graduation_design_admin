import React, { useState } from 'react';
import { List, Avatar, Button } from 'antd';

const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    title: 'test' + i,
  });
}

const WebsiteList = () => {
  const onLoadMore = () => {};
  const loadMore = (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore}>加载更多</Button>
    </div>
  );
  return (
    <>
      <div
        style={{
          overflow: 'auto',
          height: 'calc(100% - 4px)',
          padding: '0 6px 6px 0',
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          loadMore={loadMore}
          renderItem={(item) => (
            <List.Item actions={[<a key="list-loadmore-edit">删除</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ width: 40, heigt: 40 }}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="这是测试的内容"
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default WebsiteList;
