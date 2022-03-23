import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Line, Pie, Column, Bar } from '@ant-design/plots';
import './index.less';
import { lineData, columnData, pieData, barData } from './util';
import Footer from './Footer';
import WelcomeBack from './homeBack';

const Home = (props) => {
  const { dispatch } = props;

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
  return (
    <>
      <div className="home">
        <div className="home_div" style={{ height: '40%' }}>
          <WelcomeBack />

          <div className="home_charts">
            <p className="home_charts_text">用户年龄分布情况：</p>
            <div className="home_charts_div">
              <Pie {...pieConfig} style={{ height: '90%', width: '100%' }} />
            </div>
            {/* <div className="charts_right_line_two  mid">
              <Column
                {...columnConfig}
                style={{ height: '100%', width: '100%' }}
              />
            </div> */}
          </div>

          <div className="home_charts" style={{ width: '33%' }}>
            <p className="home_charts_text">使用APP时间端频率：</p>
            <div className="home_charts_div">
              <Bar {...barConfig} style={{ height: '86%', width: '100%' }} />
            </div>
          </div>
        </div>
        <div className="home_div" style={{ height: '60%' }}>
          <div className="home_charts_line">
            <div className="home_charts_line_div">
              <div>
                <p>网站/App 访问/下载量:</p>
                <Button type="primary">更多</Button>
              </div>
              <Line
                {...config}
                style={{ height: 'calc(100% - 80px)', width: '100%' }}
              />
            </div>
          </div>
        </div>
        {/* <div className="home_charts">
          <div className="charts_left home_people">
            <h2>Welcome Back</h2>
            <p>网站/App 访问/下载量:</p>
            <div className="charts_left_line">
              <Line {...config} />
            </div>
          </div>
          
          
        </div> */}
      </div>
    </>
  );
};

export default Home;
