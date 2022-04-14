import React from 'react';
import { LeftOutlined } from '@ant-design/icons';

const ArticInformation = (props) => {
  const { setLink } = props;
  return (
    <>
      <div className="user_information_title">
        <div onClick={() => setLink('artic')}>
          <LeftOutlined style={{ color: '#00000073' }} />
        </div>
        <p>用户详情</p>
      </div>
    </>
  );
};

export default ArticInformation;
