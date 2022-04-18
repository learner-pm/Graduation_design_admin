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
  Row,
  Col,
} from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';
import { Title } from '../Common/index';
import { Column, Pie } from '@ant-design/plots';
import BodyList from './bodyList';
import DataRun from './dataRun';
import RunInfoarmaiton from './runInformation';

const DataList = () => {
  const [dataLink, setDateLink] = useState('runInformation');
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
  const pieData = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <>
      {dataLink === 'runInformation' && (
        <RunInfoarmaiton setDateLink={setDateLink} />
      )}
      {dataLink === 'dataList' && (
        <div>
          <div className="data_list">
            <div className="data_list_div">
              <Title title="模板参数" />
              <p
                style={{
                  padding: '10px 20px',
                  margin: 0,
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
                >
                  {/* <Row>
                    <Col span={10}>
                      <Form.Item label="模板">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={10}>
                      <Form.Item label="年龄" style={{ width: 140 }}>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row> */}
                  <Space size={'small'}>
                    <Form.Item label="模板">
                      <Input />
                    </Form.Item>
                    <Form.Item label="年龄">
                      <Input />
                    </Form.Item>
                  </Space>

                  <Space size={'small'}>
                    <Form.Item label="身高">
                      <Input />
                    </Form.Item>
                    <Form.Item label="体重">
                      <Input />
                    </Form.Item>
                  </Space>
                  <Space size={'small'}>
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
            <div className="data_list_div">
              <BodyList />
            </div>
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
              <div className="data_list_div_charts">
                <Pie {...pieConfig} style={{ height: '100%' }} />
              </div>
            </div>
          </div>
          <div className="data_run">
            <Title title=" 跑步数据" />
            <DataRun setDateLink={setDateLink} />
          </div>
        </div>
      )}
    </>
  );
};

export default DataList;
