import React, { useState } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { Form, Input, Button, Checkbox, Image } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  CloseOutlined,
  CheckOutlined,
  MailOutlined,
  KeyOutlined,
  ExclamationOutlined,
} from '@ant-design/icons';
import './style/login.less';

const Login = (props) => {
  const url = require('./image/login.jpg');
  const [email, setEmail] = useState(undefined);
  const [word, setWord] = useState(undefined);
  const getEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const getWord = (e) => {
    setWord(e.target.value);
  };
  console.log(typeof typeof word);
  const login = () => {
    if (email && word) {
      sessionStorage.setItem('id', '001');
      history.push('/home');
    }
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div className="layout">
      <div className="login">
        <div className="login_left">
          <p>Graduation Design</p>
          <div></div>
        </div>
        <div className="login_content">
          {/* <div className="login_image">
          <img src={url} alt="" srcset="" />
        </div> */}
          <div className="login_sign">
            <p className="login_title">Welcome Back:)</p>
            <p className="login_des">
              This is the background management part of my graduation project,
              Details please see{' '}
              <a href="https://pmthank.cn/" target="_blank">
                here
              </a>
              .
            </p>
            <div className="login_sign_content">
              <div className="sign_div">
                <span className="sign_div_type">
                  <MailOutlined />
                </span>
                <div className="sign_input">
                  <p>Email</p>
                  <input type="text" value={email} onChange={getEmail} />
                </div>
                {typeof email !== 'undefined' ? (
                  email === '' ? (
                    <div className="login_sign_status fail">
                      <CloseOutlined />
                    </div>
                  ) : (
                    <div className="login_sign_status suc">
                      <CheckOutlined />
                    </div>
                  )
                ) : (
                  <div className="login_sign_status pad">
                    <ExclamationOutlined />
                  </div>
                )}
              </div>
              <div className="sign_div">
                <span className="sign_div_type">
                  <KeyOutlined />
                </span>
                <div className="sign_input">
                  <p>PassWord</p>
                  <input type="password" value={word} onChange={getWord} />
                </div>

                {typeof word !== 'undefined' ? (
                  word === '' ? (
                    <div className="login_sign_status fail">
                      <CloseOutlined />
                    </div>
                  ) : (
                    <div className="login_sign_status suc">
                      <CheckOutlined />
                    </div>
                  )
                ) : (
                  <div className="login_sign_status pad">
                    <ExclamationOutlined />
                  </div>
                )}
              </div>
            </div>
            <div className="login_remk">
              <p>
                <Checkbox onChange={onChange}>Remember Me</Checkbox>
              </p>
              <p>Forget PassWord</p>
            </div>
            <div className="login_button">
              <button onClick={login}>Sign in</button>
              <button>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
