import React, { useEffect, useState } from 'react';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import RightMenu, { IArrayAction } from '@layout/RightMenu';
import authenticationPresenter from '@modules/authentication/presenter';
import { Form, Input, Col, Row, Button } from 'antd';
import { useSingleAsync } from '@hook/useAsync';
import { useSelector } from 'react-redux';
import { RootState } from '@modules';
import store from '@core/store/redux';
import {
  removeProfile,
} from '@modules/authentication/profileStore';
import ModalChangePassWord from './components/ModalChangePassWord';
import { FormattedMessage, useIntl } from 'react-intl';
import AvatarUser from './components/AvatarUser';
import UserEntity from '@modules/user/entity';
import CONFIG from '@config/index';
import { routerViewProfile } from './router';
import HeaderComponent from '@layout/Header';
import './style.scss';
const UserProfile = () => {
  const [form] = Form.useForm();
  const intl = useIntl();
  const useTranslate = (key: string) => {
    return intl.formatMessage({ id: key, defaultMessage: key });
  };
  const { updateProfileUser } = authenticationPresenter;
  const updateProfileCall = useSingleAsync(updateProfileUser);
  const [isVisible, setIsVisible] = useState(false);
  const [isDisableForm, setIsDisableForm] = useState(true);
  const user = useSelector((state: RootState) => state.profile.user);

  const showModal = () => {
    setIsVisible(true);
  };


  useEffect(() => {
    if (user != null) {
      const localUser = { ...user };
      setIsDisableForm(true);
      form.setFieldsValue(localUser);
    }
  }, [user, form]);

  const arrayAction: IArrayAction[] = [
    {
      iconType: 'edit',
      name: useTranslate('common.edit'),
      handleAction: () => setIsDisableForm(false),
    },
    {
      iconType: 'key',
      name: useTranslate('common.change.password'),
      handleAction: () => showModal(),
    },
    {
      iconType: 'logOut',
      name: useTranslate('common.logout'),
      handleAction: () => {
        store.dispatch(removeProfile());
        window.location.href = CONFIG.LOGIN_PAGE;
      },
    },
  ];

  const chooseFile = (file) => {
    form.setFieldsValue({ accountAvatar: file });
  };

  const placeholder = (label: string): string => {
    return intl.formatMessage(
      { id: 'common.input.placeholder' },
      {
        label: intl
          .formatMessage({ id: label, defaultMessage: label })
          .toLocaleLowerCase(),
      },
    );
  };

  const onUpdateProfile = (values: UserEntity) => {
    if (typeof values.accountAvatar == 'string') {
      values.accountAvatar = '';
    }
  };

  return (
    <div>
      <div className="all-page-component">
        <div className="w-100 d-flex flex-row-reverse">
          <HeaderComponent />
        </div>
      </div>
      <div className="profile-page">
        <MainTitleComponent breadcrumbs={routerViewProfile} />
        <div className="main-component">
          <div className="profile-user__box">
            <Form
              name="userProfileForm"
              initialValues={user}
              layout="vertical"
              requiredMark={false}
              form={form}
              onFinish={onUpdateProfile}
              onResetCapture={() => {
                setIsDisableForm(true);
              }}
              id="userProfileForm"
            >
              <Row className="profile-form__box" justify="center">
                <Col span={4} className="profile-avatar">
                  <AvatarUser disabled={isDisableForm} chooseFile={chooseFile} />
                </Col>
                <Col span={12}>
                  <div className="main-form">
                    <Form.Item
                      label={useTranslate('accounts.accountFullName')}
                      name="accountFullName"
                      rules={[
                        {
                          required: true,
                        },
                        {
                          max: 99,
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input
                        disabled={isDisableForm}
                        placeholder={placeholder('accounts.accountFullName')}
                        maxLength={100}
                      />
                    </Form.Item>
                    <Form.Item
                      label={useTranslate('accounts.accountEmail')}
                      name="accountEmail"
                      rules={[
                        {
                          required: true,
                        },
                        {
                          type: 'email',
                        },
                      ]}
                    >
                      <Input
                        disabled={isDisableForm}
                        placeholder={placeholder('accounts.accountEmail')}
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </Form>
            <RightMenu arrayAction={arrayAction} />
          </div>
          <ModalChangePassWord
            setIsModalVisible={setIsVisible}
            isModalVisible={isVisible}
          />

          <div className="button-center__box profile-button-update">
            {!isDisableForm && (
              <>
                <Button
                  className="cancel-button mx-5"
                  onClick={() => setIsDisableForm(true)}
                >
                  <FormattedMessage id="common.cancel" />
                </Button>
                <Button
                  type="primary"
                  className="normal-button"
                  htmlType="submit"
                  form="userProfileForm"
                  loading={updateProfileCall?.status == 'loading'}
                >
                  <FormattedMessage id="common.save" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default React.memo(UserProfile);
