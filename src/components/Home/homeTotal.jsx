import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Progress, Tooltip } from 'antd';
import { InfoCircleOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Area, Column } from '@ant-design/plots';

const HomeTotal = (props) => {
  const { dispatch } = props;
  const [appData, setAppData] = useState([]);
  const [test, setTest] = useState(0);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json',
    )
      .then((response) => response.json())
      .then((json) => setAppData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
    console.log(1);
    setTest((test) => test + 1);
  }, []);
  useEffect(() => {
    const total = dispatch({
      //获取所有数据
      type: 'global/total',
      payload: {},
    });
  }, [dispatch]);

  const appConfig = {
    data: appData,
    xField: 'timePeriod',
    yField: 'value',
    yAxis: false,
    xAxis: false,
  };
  const columnData = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 100,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const columnConfig = {
    data: columnData,
    xField: 'type',
    yField: 'sales',
    yAxis: false,
    xAxis: false,

    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return (
    <>
      <div className="home_total">
        <div className="home_total_div">
          <div className="home_total_div_number">
            <p>
              总访问量{' '}
              <Tooltip title="包含网站和App的所有下载访问量" color={'#2db7f5'}>
                <InfoCircleOutlined />
              </Tooltip>
            </p>
            <p>826,560</p>
            <div className="home_total_div_number_div">
              周同比：12%
              <span>
                <CaretUpOutlined />
              </span>
            </div>
          </div>
          <div className="home_total_div_footer">日访问量：100</div>
        </div>
        <div className="home_total_div">
          <div className="home_total_div_number">
            <p>
              App下载量 <InfoCircleOutlined />
            </p>
            <p>4,560</p>
            <div className="home_total_div_number_div">
              <Area style={{ width: '100%', height: '100%' }} {...appConfig} />
            </div>
          </div>
          <div className="home_total_div_footer">日下载量：10</div>
        </div>
        <div className="home_total_div">
          <div className="home_total_div_number">
            <p>
              用户注册量 <InfoCircleOutlined />
            </p>
            <p>8,260</p>
            <div className="home_total_div_number_div">
              <Column
                style={{ width: '100%', height: '100%' }}
                {...columnConfig}
              />
            </div>
          </div>
          <div className="home_total_div_footer">日注册量：20</div>
        </div>
        <div className="home_total_div">
          <div className="home_total_div_number">
            <p>
              活跃度{' '}
              <Tooltip
                title="所有用户周活跃上线大于4天的比例"
                color={'#2db7f5'}
                placement="topLeft"
              >
                <InfoCircleOutlined />
              </Tooltip>
            </p>
            <p>75%</p>
            <div className="home_total_div_number_progress">
              <Progress
                strokeLinecap="square"
                type="line"
                percent={75}
                strokeColor="#52c41acc"
              />
            </div>
          </div>
          <div className="home_total_div_footer">
            周同比：6%
            <span>
              <CaretUpOutlined />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTotal;
