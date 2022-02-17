import React, { useState } from 'react';
import './style/basic.less';
import { history } from 'umi';
import { Layout, Menu, Button } from 'antd';
import AppHeader from '../components/Header';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LineChartOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Basis = (props) => {
  const { children } = props;
  const [title, setTitle] = useState('首页');
  const listen = history.listen((location, action) => {
    //路由拦截
    if (location.pathname === '/home') {
      if (!sessionStorage.getItem('id')) history.push('/');
    } else if (location.pathname === '/' || location.pathname === '/login') {
      if (sessionStorage.getItem('id')) history.push('/home');
    }
  });

  const [openKeys, setOpenKeys] = useState(['home']);
  const rootSubmenuKeys = ['home', 'sub1', '2', '3', '4'];
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
    console.log(item);
    console.log(key);
    setTitle(key);
    if (key.includes('data')) history.push('/data');
    else history.push(`/${key}`);
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
            >
              <Menu.Item key="home" icon={<UserOutlined />}>
                首页
              </Menu.Item>
              <SubMenu key="data" icon={<LineChartOutlined />} title="流量">
                <Menu.Item key="data_1">Option 1</Menu.Item>
                <Menu.Item key="data_2">Option 2</Menu.Item>
                <Menu.Item key="data_3">Option 3</Menu.Item>
                <Menu.Item key="data_4">Option 4</Menu.Item>
              </SubMenu>

              <Menu.Item key="video" icon={<VideoCameraOutlined />}>
                视频
              </Menu.Item>
              <Menu.Item key="upload" icon={<UploadOutlined />}>
                上传
              </Menu.Item>
              <Menu.Item key="set" icon={<UserOutlined />}>
                设置
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
              <div className="site-layout-background">{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
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
