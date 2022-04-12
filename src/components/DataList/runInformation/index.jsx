import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import '../style/index.less';
import Map from './map/container';

const RunInfoarmaiton = (props) => {
  const { setDateLink } = props;
  return (
    <>
      <div className="run_information_link">
        <div onClick={() => setDateLink('dataList')}>
          <LeftOutlined style={{ color: 'white' }} />
        </div>
        <p>用户详情</p>
      </div>
      <div className="run_information_content">
        <Map />
      </div>
    </>
  );
};

export default RunInfoarmaiton;
