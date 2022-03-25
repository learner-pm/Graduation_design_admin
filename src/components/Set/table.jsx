import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { columns, data } from './util';
import { Title } from '../Common';
import CreatAdmin from './creatAdmin';

const InformationTable = () => {
  const [creatAdminVisible, setCreatAdminVisible] = useState(false);
  const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSize: 10,
  };
  const creatAdmin = () => {
    setCreatAdminVisible(true);
  };
  const action = () => (
    <Button type="primary" value="default" onClick={creatAdmin}>
      创建管理员
    </Button>
  );

  return (
    <>
      <CreatAdmin
        creatAdminVisible={creatAdminVisible}
        creatCancel={() => setCreatAdminVisible(false)}
        creatSave={() => setCreatAdminVisible(false)}
      />
      <div className="set_information_table">
        <Title title="管理员列表" action={action()} />
        {/* <p>管理员列表</p> */}
        <div style={{ padding: '12px 20px', backgroundColor: 'white' }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            scroll={{ y: 'calc((100vh - 640px)' }}
          />
        </div>
      </div>
    </>
  );
};

export default InformationTable;
