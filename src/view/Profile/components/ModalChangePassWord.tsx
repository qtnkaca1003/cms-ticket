import React from 'react';
import { useSelector } from 'react-redux';
import store from '@core/store/redux';
import { RootState } from '@modules';
import { Button, Form, Input, Space } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useForm } from 'antd/lib/form/Form';
import authenticationPresenter from '@modules/authentication/presenter';
import { useSingleAsync } from '@hook/useAsync';
import {
  removeProfile,
} from '@modules/authentication/profileStore';
import { useAltaIntl } from '@hook/useTranslate';

const ModalChangePassWord = ({ setIsModalVisible, isModalVisible }) => {
  const { formatMessage } = useAltaIntl();
  const [form] = useForm();
  const accountId = useSelector(
    (state: RootState) => state.profile.user?.accountId,
  );
  const { updatePassword } = authenticationPresenter;
  const updatePasswordCall = useSingleAsync(updatePassword);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinish = (values) => {
    updatePasswordCall?.execute(values, accountId)
      .then(() => {
        handleCancel();
        store.dispatch(removeProfile());
      })
      .catch(() => { });
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      footer={false}
      title={formatMessage('accounts.change.password.title')}
      className="main-modal"
      visible={isModalVisible}
      destroyOnClose={true}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={false}
    >
      <Form
        className="main-form"
        layout="vertical"
        name="formChangePassword"
        form={form}
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label={formatMessage('accounts.oldPassword')}
          name="accountPassword"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password placeholder={formatMessage('accounts.oldPassword')} />
        </Form.Item>
        <Form.Item
          label={formatMessage('accounts.newPassword')}
          name="accountNewPassword"
          rules={[
            {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !@#$%^&*\(\)-_=+:";{}[\]\\\/<>.,~`]).{8,}$/g,
              min: 8,
            },
          ]}
        >
          <Input.Password placeholder={formatMessage('accounts.newPassword')} />
        </Form.Item>

        <Form.Item
          label={formatMessage('accounts.confirm.newPassword')}
          name="confirmPassword"
          dependencies={['accountNewPassword']}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('accountNewPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(formatMessage('password.not.match')),
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder={formatMessage('accounts.confirm.newPassword')}
          />
        </Form.Item>
        <Form.Item className="mb-0 mt-5">
          <Space className="w-100" style={{ justifyContent: 'space-evenly' }}>
            <Button
              className="cancel-button button-modal"
              htmlType="reset"
              onClick={() => onCancel()}
            >
              {formatMessage('common.cancel')}
            </Button>
            <Button
              type="primary"
              className="normal-button button-modal"
              htmlType="submit"
            >
              {formatMessage('common.save')}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalChangePassWord;
