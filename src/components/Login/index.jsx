import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { Form, Input, Button, Checkbox, Image } from 'antd';
import './style/login.less';
import { sha256 } from 'js-sha256';
import LoginDate from './loginDate';

const Login = (props) => {
  const url = require('./image/login.jpg');
  const { dispatch } = props;
  const [email, setEmail] = useState(undefined);
  const [word, setWord] = useState(undefined);

  const getEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const getWord = (e) => {
    setWord(e.target.value);
  };
  //console.log(typeof typeof word);
  const login = () => {
    if (email && word) {
      sessionStorage.setItem('id', '001');
      history.push('/home');
    }
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username && values.password) {
      dispatch({
        type: 'user/login',
        payload: {
          phone: values.username,
          passWord: sha256(values.password),
        },
      });
    }
  };
  // useEffect(() => {
  //   console.log(onFinish);
  // }, [onFinish]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const flag = true;
  return (
    <>
      <div className="app_login">
        <div className="loginO_back"></div>
        <div className="loginO_div">
          <div className="loginO_login">
            <h2>Desgin Object</h2>
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
                label="Username"
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
                label="Password"
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
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
          <footer className="login0_footer">
            MIT Licensed | Copyright © 2021-present PengMao{' '}
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              className="footer_a"
            >
              蜀ICP备20004855号-1
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Login;
