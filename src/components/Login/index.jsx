import React from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { Form, Input, Button, Checkbox, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style/login.less';

const Login = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    sessionStorage.setItem('id', '001');
    history.push('/home');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const url = require('./image/login.jpg');
  return (
    <div className="login">
      <div className="login_image">
        <Image width={'100%'} height={'100%'} src={url} />
      </div>
      <div className="login_content">
        <div>
          <p>Demo System</p>
          <p>Sign In</p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '100%' }}
              >
                Sign In
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
