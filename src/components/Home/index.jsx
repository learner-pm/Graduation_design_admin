import React, { useState, useEffect } from 'react';
import { Line, Pie } from '@ant-design/plots';
import './index.less';

const Home = (props) => {
  const { dispatch } = props;

  const [data, setData] = useState([
    {
      day: '2021/03/04',
      value: 10,
      category: 'webSite',
    },
    {
      day: '2021/03/05',
      value: 46,
      category: 'webSite',
    },
    {
      day: '2021/03/06',
      value: 30,
      category: 'webSite',
    },
    {
      day: '2021/03/04',
      value: 10,
      category: 'App',
    },
    {
      day: '2021/03/05',
      value: 50,
      category: 'App',
    },
    {
      day: '2021/03/06',
      value: 40,
      category: 'App',
    },
    {
      day: '2021/03/07',
      value: 20,
      category: 'App',
    },
  ]);

  const config = {
    data,
    xField: 'day',
    yField: 'value',
    seriesField: 'category',
    yAxis: {},
  };

  const pieData = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const pieConfig = {
    appendPadding: 10,
    pieData,
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
              {/* <Pie {...pieConfig} /> */}
            </div>
            <div className="charts_right_line_two"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
