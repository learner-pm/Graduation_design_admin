import React, { useState, useEffect } from 'react';
import './style/index.less';
import { Timeline, Button } from 'antd';
import { ClockCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import AppTable from './appTable';
import { Area, Column } from '@ant-design/plots';
import { Title } from '../Common/index';
import AppSearch from './appSearch';
import AppEdition from './appEdition';

const App = (props) => {
  const { dispatch } = props;
  const [appData, setAppData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);

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
  const appConfig = {
    data: appData,
    xField: 'timePeriod',
    yField: 'value',
    yAxis: false,
    xAxis: false,
  };
  const columnData = [
    {
      type: '一星',
      sales: 38,
    },
    {
      type: '二星',
      sales: 52,
    },
    {
      type: '三星',
      sales: 61,
    },
    {
      type: '四星',
      sales: 145,
    },
    {
      type: '五星',
      sales: 100,
    },
  ];
  const columnConfig = {
    data: columnData,
    xField: 'type',
    yField: 'sales',
    yAxis: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };

  return (
    <>
      <div className="app">
        <div className="app_left">
          <div className="app_information">
            <div
              style={{
                //justifyContent: 'flex-start',
                height: '47px',
                //borderTop: '1px solid #f0f2f5',
                padding: '0 12px',
                color: 'rgba(0, 0, 0, 0.45)',
              }}
            >
              App简述
              <InfoCircleOutlined />
            </div>
            <div style={{ display: 'block', padding: ' 0px 12px 12px 12px' }}>
              <p>
                <span> App名称：</span>Running
              </p>
              <p>
                <span>App类型：</span>提供一个运动分析的平台工具
              </p>
              <div>
                <p>
                  <span>开发时间：</span>2022/2/10
                </p>
                <p>
                  <span>当前版本：</span>0.0.1.bate
                </p>
              </div>
            </div>
          </div>
          <AppEdition />
        </div>
        <div className="app_right">
          <div className="app_numbers">
            <div className="app_numbers_div">
              <div className="home_total_div_number">
                <p style={{ padding: 0 }}>
                  App下载量 <InfoCircleOutlined />
                </p>
                <p style={{ padding: 0 }}>4,560</p>
                <div className="home_total_div_number_div">
                  <Area
                    style={{ width: '100%', height: '100%' }}
                    {...appConfig}
                  />
                </div>
              </div>
              <div className="home_total_div_footer">日下载量：10</div>
            </div>
            <div className="app_numbers_div">
              <p
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                星级情况 <InfoCircleOutlined />
              </p>
              <div style={{ height: 'calc(100% - 50px)', padding: '4px 12px' }}>
                <Column
                  style={{ width: '100%', height: '100%' }}
                  {...columnConfig}
                />
              </div>
            </div>
            <AppSearch />
          </div>
          <div
            style={{ height: 'calc(100% - 190px)', backgroundColor: 'white' }}
          >
            <AppTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
