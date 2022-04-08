import React, { useState } from 'react';
import './style/index.less';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Space,
} from 'antd';
import { Title } from '../Common/index';
import { Column } from '@ant-design/plots';

const DataList = () => {
  const data = [
    {
      type: '差',
      sales: 38,
    },
    {
      type: '一般',
      sales: 52,
    },
    {
      type: '标准',
      sales: 61,
    },
    {
      type: '优',
      sales: 145,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '数量',
      },
    },
  };
  return (
    <>
      <div className="data_list">
        <div className="data_list_div">
          <Title title="模板参数" />
          <p
            style={{
              width: '80%',
              margin: '0 auto',
              marginTop: 8,
              color: 'rgba(0, 0, 0, 0.45)',
              fontSize: 14,
              textAlign: 'right',
            }}
          >
            评断的基本参数
          </p>
          <div className="data_list_form">
            <Form
              layout="horizontal"
              initialValues={{
                size: 'default',
              }}
              size="default"
            >
              <Form.Item label="身高">
                <Input />
              </Form.Item>
              <Form.Item label="体重">
                <Input />
              </Form.Item>

              <Form.Item label="年龄">
                <Input />
              </Form.Item>
              <Space>
                <Form.Item label="误差">
                  <InputNumber />
                </Form.Item>
                <Form.Item label="性别" valuePropName="sex">
                  <Switch />
                </Form.Item>
              </Space>

              <Form.Item style={{ width: '100%' }}>
                <Button
                  style={{ width: '100%' }}
                  type="primary"
                  htmlType="submit"
                >
                  添加
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="data_list_div"></div>
        <div className="data_list_div">
          <Title title="健康度" />
          <p
            style={{
              width: '80%',
              margin: '0 auto',
              marginTop: 8,
              color: 'rgba(0, 0, 0, 0.45)',
              fontSize: 14,
              textAlign: 'right',
            }}
          >
            整体用户的健康标准统计
          </p>
          <div className="data_list_div_charts">
            <Column {...config} style={{ height: '100%' }} />
          </div>
        </div>
        <div className="data_list_div">
          <Title title="年龄图表" />
          <div></div>
        </div>
      </div>
      <div className="data_run">
        <Title title=" 跑步数据" />
      </div>
    </>
  );
};

export default DataList;
