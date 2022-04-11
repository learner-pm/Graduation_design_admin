import React from 'react';
import { Timeline, Button } from 'antd';
import { ClockCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Title } from '../Common/index';

const AppEdition = () => {
  return (
    <>
      <div className="app_edition">
        <Title title="App迭代" />
        {/* <p></p> */}
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
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
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
    </>
  );
};

export default AppEdition;
