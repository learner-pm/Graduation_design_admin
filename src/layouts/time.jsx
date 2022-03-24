import React from 'react';
import { useTime } from '../hooks/useTime';
const Time = () => {
  const time = useTime();
  return (
    <>
      <p>
        <span>IP :</span>124.12.12.0
      </p>
      <p>
        <span>Time :</span>
        {time}
      </p>
    </>
  );
};

export default Time;
