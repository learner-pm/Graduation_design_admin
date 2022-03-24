import React, { useState, useEffect } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const WelcomeBack = () => {
  const [loading, setLoading] = useState(false);
  const [data, setDate] = useState([]);
  const [list, setList] = useState([]);
  const [initLoading, setInitLoading] = useState(true);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setDate(res.results);
        setList(res.results);
        setInitLoading(false);
      });
  }, []);
  const onLoadMore = () => {};
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <>
      <div className="home_back">
        <h2>Hi，admin。</h2>
        <div className="home_back_total">
          <div className="home_back_div">
            <div className="home_back_div_icon">
              <DoubleRightOutlined
                style={{ transform: 'rotate(-90deg)', fontSize: '26px' }}
              />
            </div>
            <p>
              <span>用户数量</span>
              <span>501</span>
            </p>
          </div>
          <div className="home_back_div">
            <div className="home_back_div_icon">
              <DoubleRightOutlined
                style={{ transform: 'rotate(-90deg)', fontSize: '26px' }}
              />
            </div>
            <p>
              <span>网络请求</span>
              <span>501</span>
            </p>
          </div>
          <div className="home_back_div">
            <div className="home_back_div_icon">
              <DoubleRightOutlined
                style={{ transform: 'rotate(-90deg)', fontSize: '26px' }}
              />
            </div>

            <p>
              <span>网站访问</span>
              <span>501</span>
            </p>
          </div>
          <div className="home_back_div">
            <div className="home_back_div_icon">
              <DoubleRightOutlined
                style={{ transform: 'rotate(-90deg)', fontSize: '26px' }}
              />
            </div>

            <p>
              <span>活跃度</span>
              <span>1%</span>
            </p>
          </div>
        </div>
        <div className="home_back_footer">
          {/* <p>用户留言</p>
          <div>
            <List
              className="demo-loadmore-list"
              loading={initLoading}
              itemLayout="horizontal"
              loadMore={loadMore}
              dataSource={list}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <a key="list-loadmore-edit">edit</a>,
                    <a key="list-loadmore-more">more</a>,
                  ]}
                >
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} />}
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <div>content</div>
                  </Skeleton>
                </List.Item>
              )}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WelcomeBack;
