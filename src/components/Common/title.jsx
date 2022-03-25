import React from 'react';
import './style/title.less';

const Title = (props) => {
  const { title, action } = props;
  return (
    <>
      <div className="common_title">
        <p>{title}</p>
        <div>{action}</div>
      </div>
    </>
  );
};

export default Title;
