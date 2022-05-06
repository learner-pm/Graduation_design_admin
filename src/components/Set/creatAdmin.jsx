import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const CreatAdmin = (props) => {
  const { creatAdminVisible, creatCancel, creatSave } = props;
  const { TextArea } = Input;
  const save = () => {
    creatSave();
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username && values.password) {
      dispatch({
        type: 'admin/creat',
        payload: {
          phone: values.username,
          passWord: sha256(values.password),
        },
      }).then((e) => {
        console.log(e);
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Modal
        title="创建管理员"
        centered
        visible={creatAdminVisible}
        onOk={save}
        onCancel={creatCancel}
        width={600}
        cancelText="取消"
        okText="创建"
      >
        <div className="creat_admin_form">
          <Form
            name="basic"
            // layout={'vertical'}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ width: '80%' }}
          >
            <Form.Item
              style={{ width: '80%' }}
              label="账号"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: '80%' }}
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
              label="备注"
              name="remark"
              style={{ width: '100%', transform: 'translateX(10px)' }}
            >
              <TextArea rows={4} />
            </Form.Item>
            {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

            {/* <Form.Item
            wrapperCol={{
              offset: 0,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Sign In
            </Button>
          </Form.Item> */}
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default CreatAdmin;
