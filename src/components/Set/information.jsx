import React, { useState, useEffect } from 'react';
import './style/index.less';
import { Image, Button } from 'antd';
import { Title } from '../Common';

const Information = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    const information = dispatch({
      type: 'admin/getInformation',
      payload: '',
    });
  }, []);
  const img = require('./img/my.jpg');
  return (
    <>
      <div className="set_information">
        <Title
          title="管理员信息"
          action={<Button type="primary">修改密码</Button>}
        />

        <div className="set_information_div">
          <div>
            <p>
              <span>管理员名字</span>：admin
            </p>
            <p>
              <span>密码等级</span>：强
            </p>
          </div>
          <div>
            <p>
              <span>上次登录时间</span>：111
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span>头像</span>：
              <img src={img} alt="头像" />
            </p>
          </div>

          {/* <div className="set_information_div_left">
            <div>
              用户名字：<span> admin</span>
            </div>
            <div>
              密码等级：<span>强</span>
            </div>
            <div>
              上次登录时间：<span>2020/12/12 06:00:00</span>
            </div>
          </div>
          <div className="set_information_div_right">
            <div>
              头像：
              <img src={img} alt="头像" />
            </div>
            <div>
              备注：<span>无</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Information;
