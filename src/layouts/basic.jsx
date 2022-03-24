import React, { useState, useEffect } from 'react';
import './style/basic.less';
import { history } from 'umi';
import { Layout, Menu, Button, Spin } from 'antd';
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

const Basis = (props) => {
  const { children, location } = props;

  console.log(location);
  const [title, setTitle] = useState('首页');
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(!loading);
      }, 500);
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
    //const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    setLoading(!loading);
    history.push(`/${key}`);
  };

  return (
    <>
      <div className="app_basic">
        <Layout style={{ height: '100%' }}>
          <Sider
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
              theme="dark"
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
            <Content style={{ margin: '24px 16px 0' }}>
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
                <div className="site-layout-background">{children}</div>
              )}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <div className="layout_footer">
                <Time />
              </div>
              MIT Licensed | Copyright © 2021-present PengMao{' '}
              <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                className="footer_a"
              >
                蜀ICP备20004855号-1
              </a>
            </Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
};

export default Basis;
