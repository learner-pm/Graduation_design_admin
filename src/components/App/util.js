import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '用户年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '用户性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '留言内容',
    dataIndex: 'content',
    key: 'content',
    ellipsis: true,
    width: 150,
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    width: 200,
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
    fixed: 'right',
    render: (text, record) => (
      <Space size="middle">
        <a>查看</a>
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
    sex: '男',
    time: '2020 02 16',
    content: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
];

for (let i = 1; i < 40; i++) {
  data.push({
    key: i,
    name: 'John Brown' + i,
    age: 32 + i,
    sex: i % 2 === 0 ? '男' : '女',
    time: '2020 02 16',
    content: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  });
}
export { columns, data };
