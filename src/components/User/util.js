import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: 'Uuid',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '登录次数',
    dataIndex: 'times',
    key: 'times',
    sorter: (a, b) => a.times - b.times,
  },
  {
    title: '注册时间',
    dataIndex: 'time',
    key: 'time',
  },
  // {
  //   title: '地址',
  //   dataIndex: 'address',
  //   key: 'address',
  // },
  {
    title: '密码等级',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag == 0 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data = [
  {
    key: '0',
    name: 'John Brown',
    uuid: 'dsadsa0dsa12da0',
    age: 32,
    times: 12,
    time: '2020 12 12',
    address: '四川成都',
    tags: [0],
  },
];

for (let i = 1; i < 40; i++) {
  data.push({
    key: i,
    name: 'John Brown' + i,
    uuid: 'dsadsa0dsa12da0' + i,
    age: 32,
    times: 12,
    time: '2020 12 12',
    address: '四川成都',
    tags: [i % 2 === 0 ? 0 : 1],
  });
}

export { columns, data };
