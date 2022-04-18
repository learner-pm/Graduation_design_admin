import React, { useState, useEffect } from 'react';
import { Button, Tabs } from 'antd';
import { Line, Pie, Column, Bar } from '@ant-design/plots';
import './index.less';
import { lineData, columnData, pieData, barData } from './util';
import Footer from './Footer';
import WelcomeBack from './homeBack';
import HomeTotal from './homeTotal';
import { Title } from '../Common';
import ApiHistory from './apiHistory';
const { TabPane } = Tabs;
import WebsiteList from './websiteList';
import AppList from './appList';
const Home = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    const lineData = dispatch({
      type: 'global/appUsers',
      payload: {},
    });
  }, []);
  const barConfig = {
    data: barData,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left',
    },
  };
  const config = {
    data: lineData,
    xField: 'day',
    yField: 'value',
    seriesField: 'category',
    yAxis: {},
  };

  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  const columnConfig = {
    data: columnData,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  const callback = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="home">
        <HomeTotal dispatch={dispatch} />
        <div className="home_div" style={{ height: 'calc(100% - 200px)' }}>
          <div className="home_website">
            <Title
              title="访问量/下载量"
              // action={<Button type="primary">更多</Button>}
            />
            <div
              style={{
                height: 'calc(100% - 60px)',
                width: '100%',
                padding: '20px',
              }}
            >
              <Line style={{ width: '100%', height: '100%' }} {...config} />
            </div>
          </div>
          <div className="home_website_total">
            <Title title="日志" />
            <ApiHistory />
            {/* <Tabs
              defaultActiveKey="1"
              onChange={callback}
              style={{ height: '100%', padding: '0 20px' }}
            >
              <TabPane tab="网站" key="1" style={{ height: '100%' }}> */}
            {/* <WebsiteList /> */}
            {/* </TabPane>
              <TabPane tab="APP" key="2"> */}
            {/* <AppList /> */}
            {/* </TabPane>
            </Tabs> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
