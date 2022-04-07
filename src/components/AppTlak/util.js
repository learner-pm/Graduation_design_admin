import { Tag, Space } from 'antd';
const Columns = [
  {
    title: 'Id',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '文章名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },

  {
    title: '点赞量',
    dataIndex: 'number',
    key: 'number',
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: '发布时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '发布人',
    dataIndex: 'actor',
    key: 'actor',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>查看</a>
        <a style={{ color: 'red' }}>删除</a>
        <a style={{ color: '#00000073' }}>封禁</a>
      </Space>
    ),
  },
];

const Data = [
  {
    key: '0',
    name: 'John Brown',
    uuid: 'dsadsa0dsa12da0',
    number: 32,
    time: '2020 12 12',
    actor: 'admin',
  },
];

for (let i = 1; i < 40; i++) {
  Data.push({
    key: i,
    name: 'John Brown' + i,
    uuid: 'dsadsa0dsa12da0' + i,
    number: 32,
    time: '2020 12 12',
    actor: 'admin',
  });
}
export { Columns, Data };
