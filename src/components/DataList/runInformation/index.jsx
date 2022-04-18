import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import '../style/index.less';
import Map from './map/container';
import { Title } from '../../Common/index';

const RunInfoarmaiton = (props) => {
  const { setDateLink } = props;
  return (
    <>
      <div className="user_information_title">
        <div onClick={() => setDateLink('dataList')}>
          <LeftOutlined style={{ color: '#00000073' }} />
        </div>
        <p>数据详情</p>
      </div>
      <div className="run_information_content">
        <Title title="基础信息" />
        <div className="run_information_content_div">
          <div>
            <p>
              <span>数据编号</span>
              :01dsa018d7as
            </p>
            <p>
              <span>开始时间</span>：2020
            </p>
            <p>
              <span>结束时间</span>：4444
            </p>
          </div>
          <div>
            <p>
              <span>最低配速</span>：4444
            </p>
            <p>
              <span>最高配速</span>：4444
            </p>
            <p>
              <span>平均配速</span>：4444
            </p>
          </div>
          <div>
            <p>
              <span>卡路里消耗</span>：4444
            </p>
            <p>
              <span>效果预估</span>：4444
            </p>
            <p></p>
          </div>
        </div>
        <div style={{ height: 'calc(100% - 270px)', marginTop: 10 }}>
          <Title title="轨迹图" />
          <div
            style={{
              height: 'calc(100% - 40px)',
              padding: 24,
              backgroundColor: 'white',
            }}
          >
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default RunInfoarmaiton;
