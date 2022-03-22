import React, { useState, useEffect } from 'react';

const addZero = (number) => (number < 10 ? '0' + number : number);
const getTime = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return `${year}/${month + 1}/${day} ${hours}:${addZero(minutes)}:${addZero(
    seconds,
  )}`;
};

export function useTime() {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);
  return time;
}
