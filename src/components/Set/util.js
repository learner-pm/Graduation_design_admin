import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: '管理员姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '上次登录时间',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Ip地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>修改密码</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '0',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
];

for (let i = 1; i < 40; i++) {
  data.push({
    key: i,
    name: 'John Brown' + i,
    age: 32 + i,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  });
}
export { columns, data };
