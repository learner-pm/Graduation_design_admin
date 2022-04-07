import React, { useState, useEffect } from 'react';
import './style/index.less';
import { Timeline, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import AppTable from './appTable';
import { Area, Column } from '@ant-design/plots';
const App = () => {
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
  const hostKeyList = [];
  for (let i = 0; i < 10; i++) {
    hostKeyList.push({
      id: i,
      ctn: '内容' + i,
      index: i,
    });
  }
  return (
    <>
      <div className="app">
        <div className="app_left">
          <div className="app_edition">
            <p>App迭代</p>
            <div className="app_edition_div">
              <Timeline mode="alternate">
                <Timeline.Item>发布最新版本 2.1.9 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">
                  fix bug in 2.1.4 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </Timeline.Item>
                <Timeline.Item color="red">
                  App视频播放错误 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item
                  dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
                >
                  Technical testing 2015-09-01
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </div>
        <div className="app_right">
          <div className="app_numbers">
            <div className="app_numbers_div">
              <div className="home_total_div_number">
                <p style={{ padding: 0 }}>App下载量</p>
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
              <p>星级情况</p>
              <div style={{ height: 'calc(100% - 50px)', padding: '4px 12px' }}>
                <Column
                  style={{ width: '100%', height: '100%' }}
                  {...columnConfig}
                />
              </div>
            </div>
            <div className="app_numbers_div">
              <p
                style={{
                  fontSize: 16,
                  borderBottom: '1px solid #e8e9eb',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                热词
                <Button type="primary" size="small">
                  更多
                </Button>
              </p>
              <div className="host_list">
                {hostKeyList.map((e) => (
                  <p
                    key={e.id}
                    style={{
                      padding: '0 20px',
                      margin: 0,
                      height: '28px',
                      lineHeight: '28px',
                      marginBottom: '2px',
                    }}
                  >
                    <span>{e.index} :</span> {e.ctn}
                  </p>
                ))}
              </div>
            </div>
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
