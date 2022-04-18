import React from 'react';
import { Button, Tabs } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Title } from '../../Common';
import GoodTable from './goodTable';
import CollectTable from './collectTable';
import CommentTable from './commentTable';

const { TabPane } = Tabs;

const ArticInformation = (props) => {
  const { setLink } = props;
  const callback = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="user_information_title">
        <div onClick={() => setLink('artic')}>
          <LeftOutlined style={{ color: '#00000073' }} />
        </div>
        <p>文章详情</p>
      </div>
      <div className="app_resoures_content">
        <Title
          title="基础信息"
          action={<Button type="primary">修改内容</Button>}
        />
        <div className="app_resoures_content_div">
          <p>
            <span
              style={{
                color: '#a5a4a4',
                marginRight: 10,
                fontWeight: 500,
                fontSize: 17,
              }}
            >
              文章标题：
            </span>
            test
          </p>
          <p>
            <span
              style={{
                color: '#a5a4a4',
                marginRight: 10,
                fontWeight: 500,
                fontSize: 17,
              }}
            >
              创建时间：
            </span>
            2020
          </p>
          <p>
            <span
              style={{
                color: '#a5a4a4',
                marginRight: 10,
                fontWeight: 500,
                fontSize: 17,
              }}
            >
              上次更新时间：
            </span>
            2021
          </p>
        </div>
        <div className="app_resoures_content_div">
          <p>
            <span
              style={{
                color: '#a5a4a4',
                marginRight: 10,
                fontWeight: 500,
                fontSize: 17,
              }}
            >
              浏览次数：
            </span>
            10
          </p>
          <p>
            <span
              style={{
                color: '#a5a4a4',
                marginRight: 10,
                fontWeight: 500,
                fontSize: 17,
              }}
            >
              发布作者：
            </span>
            test
          </p>
          <p>
            <span
              style={{
                color: '#a5a4a4',
                marginRight: 10,
                fontWeight: 500,
                fontSize: 17,
              }}
            >
              内容详情:
            </span>
            <Button>查看</Button>
          </p>
        </div>
      </div>
      <div className="app_resoures_data">
        {/* <Title title="数据信息" /> */}
        <div className="app_resoures_data_div">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="点赞" key="1" style={{ height: 'calc(100% - 40px)' }}>
              <GoodTable />
            </TabPane>
            <TabPane tab="收藏" key="2">
              <CollectTable />
            </TabPane>
            <TabPane tab="评论" key="3">
              <CommentTable />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ArticInformation;
