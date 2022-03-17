import React from 'react';
import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import MainTitleComponent from '@shared/components/MainTitleComponent';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { routerSchoolRegister } from './router';
import './style.scss';

const SchoolRegister = () => {
  const { formatMessage } = useAltaIntl();

  return (
    <div className="school-register">
      <MainTitleComponent breadcrumbs={routerSchoolRegister} />
      <div className="main-card">
        <div className="justify-content-md-between mb-3 align-items-end">
          <Space direction="vertical" style={{ width: '100%' }} size="large">
            <h1>{formatMessage('RegisterLearning.note')}</h1>
          </Space>

          <Space direction="vertical" style={{ width: '100%' }} size="large">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>{formatMessage('RegisterLearning.choosefile')}</Button>
            </Upload>
          </Space>
          <hr />
          <Button className="normal-button">{formatMessage('RegisterLearning.upload')}</Button>
        </div>
      </div>
    </div>
  );
};

export default SchoolRegister;
