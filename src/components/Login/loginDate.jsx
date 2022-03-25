import React from 'react';
import { useTime } from '../../hooks/useTime';
const LoginDate = () => {
  const time = useTime();
  return (
    <>
      <p>It is a system created by PengMao.</p>
      <p>Time:{time}</p>
    </>
  );
};

export default LoginDate;
