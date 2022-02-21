import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Line, Pie, Column, Bar } from '@ant-design/plots';
import './index.less';
import { lineData, columnData, pieData, barData } from './util';

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
        <div className="home_charts">
          <div className="charts_left">
            <p>网站/App 访问/下载量:</p>
            <div className="charts_left_line">
              <Line {...config} />
            </div>
          </div>
          <div className="charts_right">
            <div className="charts_right_line_one">
              <p>年龄层分布情况</p>
              <Pie {...pieConfig} style={{ height: '100%' }} />
            </div>

            <div className="charts_right_line_two">
              <p>功能偏好</p>
              <Column {...columnConfig} style={{ height: '100%' }} />
            </div>
          </div>
          <div className="charts_right">
            <div className="charts_right_last">
              <Bar {...barConfig} />
            </div>
            {/* <div className="charts_right_line_one">
              <Pie {...pieConfig} style={{ height: '100%' }} />
              <p>年龄层分布情况</p>
            </div>
            <div className="charts_right_line_two"></div> */}
          </div>
        </div>
        <div className="home_charts_line">
          <div className="home_charts_line_div">
            <div>
              <p>网站/App 访问/下载量:</p>
              <Button type="primary">更多</Button>
            </div>
            <Line {...config} style={{ height: 'calc(100% - 66px)' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
