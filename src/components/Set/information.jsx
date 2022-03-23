import React from 'react';
import './style/index.less';
import { Image, Button } from 'antd';

const Information = () => {
  const img = require('./img/my.jpg');
  return (
    <>
      <div className="set_information">
        <p>
          管理员信息 <Button type="primary">修改密码</Button>
        </p>
        <div className="set_information_div">
          <div className="set_information_div_left">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
