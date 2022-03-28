import React, { useState, useEffect } from 'react';
import './style/basic.less';
import { history } from 'umi';
import { Layout, Menu, Button, Spin, Breadcrumb } from 'antd';
import AppHeader from '../components/Header';
import Time from './time';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LineChartOutlined,
  FileSearchOutlined,
  SettingOutlined,
  AppstoreOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const urlMap = {
  home: '首页',
  app: 'App',
  resoures: '视频文章',
  run: '运动',
  user: '用户',
  set: '设置',
};

const Basis = (props) => {
  const { children, location } = props;

  console.log(location);
  const [title, setTitle] = useState('首页');
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [breadList, setBreadList] = useState([
    {
      id: 0,
      ctn: '首页',
    },
  ]);
  useEffect(() => {
    if (loading === true)
      setTimeout(() => {
        setLoading(!loading);
      }, 600);
  }, [loading]);
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path.indexOf('app') !== -1) {
      const open = path.split('/');
      setOpenKeys(() => {
        return ['App'];
      });
      setSelectedKeys(() => path);
    } else {
      setSelectedKeys(() => {
        return [path];
      });
    }
  }, []);

  const listen = history.listen((location, action) => {
    //路由拦截
    if (location.pathname === '/home') {
      if (!sessionStorage.getItem('id')) history.push('/');
    } else if (location.pathname === '/' || location.pathname === '/login') {
      if (sessionStorage.getItem('id')) history.push('/home');
    }
  });

  const [openKeys, setOpenKeys] = useState([]);
  const rootSubmenuKeys = ['App'];
  const onOpenChange = (keys) => {
    console.log(keys);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const menuClick = ({ item, key, keyPath, domEvent }) => {
    //console.log(item);
    //console.log(key);
    // setTitle(key);
    //if (key.includes('data')) history.push('/data');
    //else history.push(`/${key}`);
    setSelectedKeys(() => {
      return [key];
    });
    setBreadList(() => {
      const braArr = [];
      if (key.indexOf('/') !== -1) {
        const arr = key.split('/');
        arr.forEach((e, index) => {
          braArr.push({
            id: index,
            ctn: urlMap[e],
          });
        });
        return braArr;
      }
      return [
        {
          id: 0,
          ctn: urlMap[key],
        },
      ];

      // arr[0] = arr[0].toUpperCase();
    });
    //const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    setLoading(!loading);
    history.push(`/${key}`);
  };

  return (
    <>
      <div className="app_basic">
        <Layout style={{ height: '100%' }}>
          <Sider
            style={{ background: '#fff' }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />

            <Menu
              theme="light"
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              onClick={menuClick}
              defaultSelectedKeys={['home']}
              selectedKeys={selectedKeys}
            >
              <Menu.Item key="home" icon={<UserOutlined />}>
                首页
              </Menu.Item>
              <SubMenu key="App" icon={<LineChartOutlined />} title="APP">
                <Menu.Item key="app">信息情况</Menu.Item>
                <Menu.Item key="app/resoures">视频文章</Menu.Item>
                <Menu.Item key="app/run">Run</Menu.Item>
                {/* <Menu.Item key="data_4"></Menu.Item> */}
              </SubMenu>

              <Menu.Item key="user" icon={<FileSearchOutlined />}>
                用户
              </Menu.Item>
              {/* <Menu.Item key="Upload" icon={<UploadOutlined />}>
                文件中心
              </Menu.Item> */}
              <Menu.Item key="set" icon={<SettingOutlined />}>
                系统
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: '0 24px' }}
            >
              <AppHeader title={title} />
            </Header>
            <Content>
              {loading ? (
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <Spin tip="Loading..." size="large" />
                </div>
              ) : (
                <div className="site-layout-background">
                  {/* style={{ margin: '24px 16px 0' }} */}
                  <Breadcrumb
                    style={{
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '14px',
                      height: 40,
                    }}
                  >
                    {breadList.map((e) => (
                      <Breadcrumb.Item
                        key={e.id}
                        style={{ color: '#00000073' }}
                      >
                        {e.ctn}
                      </Breadcrumb.Item>
                    ))}
                  </Breadcrumb>
                  <div style={{ padding: '12px', height: '100%' }}>
                    {children}
                  </div>
                </div>
              )}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <div className="layout_footer">
                <Time />
              </div>
              Copyright © 2022-now • Wrote and built by PengMao
            </Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Basis;
