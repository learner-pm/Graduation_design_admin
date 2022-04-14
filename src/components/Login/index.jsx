import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { Form, Input, Button, Checkbox, Image } from 'antd';
import './style/login.less';
import { sha256 } from 'js-sha256';
import LoginDate from './loginDate';

const Login = (props) => {
  const url = require('./image/login.jpg');
  const { dispatch } = props;

  const onFinish = (values) => {
    if (values.username && values.password) {
      dispatch({
        type: 'global/login',
        payload: {
          phone: values.username,
          passWord: sha256(values.password),
        },
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className="app_login">
        <div className="loginO_back"></div>
        <div className="loginO_div">
          <div className="loginO_login">
            <h2>Graduation Design</h2>
            <LoginDate />
            <Form
              name="basic"
              layout={'vertical'}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ width: '100%' }}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  登 录
                </Button>
              </Form.Item>
            </Form>
          </div>
          <footer className="login0_footer">
            Copyright © 2022-now • Wrote and built by PengMao
          </footer>
        </div>
      </div>
    </>
  );
};
export default Login;
