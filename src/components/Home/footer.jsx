import React, { useState, useEffect } from 'react';
import { getTime } from './util';

const Footer = () => {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);
  return (
    <>
      <div className="home_footer">
        <p>
          <span> IP</span>: 124.12.12.0
        </p>
        <p>
          <span>Time</span>: {time}
        </p>
      </div>
    </>
  );
};

export default Footer;
