import React from 'react';
import { DoubleRightOutlined } from '@ant-design/icons';
const WelcomeBack = () => {
  return (
    <>
      <div className="home_back">
        <h2>Hi，admin。</h2>
        <div className="home_back_total">
          <div className="home_back_div">
            <div>
              <DoubleRightOutlined className="home_back_div_icon" />{' '}
              <span>501次</span>
            </div>
            <p>用户数量</p>
          </div>
          <div className="home_back_div">
            <div>
              <DoubleRightOutlined className="home_back_div_icon" />
              <span>501次</span>
            </div>
            <p>网络请求</p>
          </div>
          <div className="home_back_div">
            <div>
              <DoubleRightOutlined className="home_back_div_icon" />{' '}
              <span>501次</span>
            </div>
            <p>网站访问</p>
          </div>
          <div className="home_back_div">
            <div>
              <DoubleRightOutlined className="home_back_div_icon" />
              <span>1%</span>
            </div>
            <p>活跃度</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeBack;
