const lineData = [
  {
    day: '2021/03/04',
    value: 10,
    category: 'webSite',
  },
  {
    day: '2021/03/05',
    value: 46,
    category: 'webSite',
  },
  {
    day: '2021/03/06',
    value: 30,
    category: 'webSite',
  },
  {
    day: '2021/03/07',
    value: 20,
    category: 'webSite',
  },
  {
    day: '2021/03/08',
    value: 50,
    category: 'webSite',
  },
  {
    day: '2021/03/09',
    value: 60,
    category: 'webSite',
  },
  {
    day: '2021/03/10',
    value: 80,
    category: 'webSite',
  },
  {
    day: '2021/03/04',
    value: 10,
    category: 'App',
  },
  {
    day: '2021/03/05',
    value: 50,
    category: 'App',
  },
  {
    day: '2021/03/06',
    value: 40,
    category: 'App',
  },
  {
    day: '2021/03/07',
    value: 20,
    category: 'App',
  },
  {
    day: '2021/03/08',
    value: 100,
    category: 'App',
  },
  {
    day: '2021/03/09',
    value: 80,
    category: 'App',
  },
  {
    day: '2021/03/10',
    value: 50,
    category: 'App',
  },
];
const columnData = [
  {
    type: 'one',
    sales: 38,
  },
  {
    type: 'two',
    sales: 52,
  },
  {
    type: 'three',
    sales: 61,
  },
  {
    type: 'four',
    sales: 145,
  },
  {
    type: 'five',
    sales: 48,
  },
  {
    type: 'six',
    sales: 38,
  },
  {
    type: 'seven',
    sales: 38,
  },
  {
    type: 'eight',
    sales: 38,
  },
];
const pieData = [
  {
    type: '一',
    value: 27,
  },
  {
    type: '二',
    value: 25,
  },
  {
    type: '三',
    value: 18,
  },
  {
    type: '四',
    value: 15,
  },
  {
    type: '五',
    value: 10,
  },
];
const barData = [
  {
    year: '1951 年',
    value: 38,
  },
  {
    year: '1952 年',
    value: 52,
  },
  {
    year: '1956 年',
    value: 61,
  },
  {
    year: '1957 年',
    value: 145,
  },
  {
    year: '1958 年',
    value: 48,
  },
];

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
export { lineData, columnData, pieData, barData, getTime };
