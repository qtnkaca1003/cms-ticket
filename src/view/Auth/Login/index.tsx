import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Checkbox, Button } from 'antd';
import { useSingleAsync } from '@hook/useAsync';
import authenticationPresenter from '@modules/authentication/presenter';
import { useAltaIntl } from '@hook/useTranslate';
import RenderError from '../components/RenderError';
import '../styles.scss';

const Login = () => {
  const history = useHistory();
  const { formatMessage } = useAltaIntl();
  const { login } = authenticationPresenter;
  const loginByAccount = useSingleAsync(login);
  const [errorStatus, setErrorStatus] = useState('');
  const onFinishFailed = () => {
    setErrorStatus('');
  };
  const onSubmitAccount = (values: any) => {
    const remember = values.remember;
    delete values.remember;
    document.cookie = `remember_me=${true}; SameSite=None; Secure`;
    loginByAccount?.execute(values, remember)
      .then(() => {
        setErrorStatus('');
        setTimeout(() => {
          history.push('/');
        }, 300);
      })
      .catch(() => {
        setErrorStatus(formatMessage('login.account.error'));
      });
  };

  return (
    <>
      <div className="main-form auth-form">
        <h3 className="main-title">{formatMessage('login.title')}</h3>
        <div className="content-form">
          <Form
            name="loginByAccount"
            layout="vertical"
            onFinish={onSubmitAccount}
            onFinishFailed={onFinishFailed}
            requiredMark={false}
            initialValues={{
              remember: false,
            }}
          >
            <Form.Item
              label={formatMessage('auth.email')}
              name="accountEmail"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={formatMessage('auth.email')} />
            </Form.Item>
            <Form.Item
              label={formatMessage('auth.password')}
              name="accountPassword"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder={formatMessage('auth.password')} />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              className="remember__login"
            >
              <Checkbox>{formatMessage('login.remember')}</Checkbox>
            </Form.Item>
            {errorStatus && <RenderError errorStatus={errorStatus} />}
            <Button htmlType="submit" className="normal-button">
              {formatMessage('login.button.account')}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
