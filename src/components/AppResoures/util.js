import { Tag, Space } from 'antd';
const artColumns = [
  {
    title: 'Uuid',
    dataIndex: 'uuid',
    key: 'uuid',
  },
  {
    title: '发布时间',
    dataIndex: 'creatTime',
    key: 'creatTime',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '流量次数',
    dataIndex: 'times',
    key: 'times',
    sorter: (a, b) => a.times - b.times,
  },
  {
    title: '点赞数',
    dataIndex: 'liked',
    key: 'liked',
  },
  {
    title: '被收藏',
    dataIndex: 'collected',
    key: 'collected',
  },
  {
    title: '推荐度',
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
  {
    title: '操作',
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

const artData = [
  {
    key: '0',
    name: 'John Brown',
    uuid: 'dsadsa0dsa12da0',
    creatTime: '2020 12 12',
    times: 12,
    liked: 0,
    collected: 'one',
    tags: [0],
  },
];

for (let i = 1; i < 40; i++) {
  artData.push({
    key: i,
    name: 'John Brown' + i,
    uuid: 'dsadsa0dsa12da0' + i,
    creatTime: '2020 12 12',
    times: 12,
    liked: i * 10,
    collected: 'one',
    tags: [i % 2 === 0 ? 0 : 1],
  });
}
export { artColumns, artData };
