import httpRepository from '@core/repository/http';
import User from '@modules/user/entity';

const register = (payload) => {
  return httpRepository.execute({
    path: '/auth/register',
    method: 'post',
    payload,
    config: { isPrivate: false },
  });
};
const forgotPass = (payload) => {
  return httpRepository.execute({
    path: `api/Users/PasswordRecovery?UserName=${payload.email}`,
    method: 'get',
    showSuccess: false,
    showError: false,
    // payload,
    config: { isPrivate: false },
  });
};

const CheckRecoveryToken = (payload) => {
  return httpRepository.execute({
    path: `api/Users/CheckRecoveryToken?recoveryToken=${payload}`,
    method: 'get',
    // payload,
    showSuccess: false,
    showError: false,
    config: { isPrivate: false },
  });
};

const updatePassword = (payload) => {
  return httpRepository.execute({
    path: '/api/Users/ChangePassword',
    method: 'put',
    payload,
    showSuccess: false,
    showError: false,
    config: { isPrivate: true },
  });
};

export interface ILoginDTO {
  accountUserName: string;
  accountPassword: string;
  applicationId?: string;
}

const login = (payload: ILoginDTO) => {
  return httpRepository.execute({
    path: '/api/Accounts/Login',
    method: 'post',
    payload,
    config: { isPrivate: false },
  });
};

export interface IGetOtpCode {
  accountPhone: string;
  reCaptcha: string;
}
const getOtpCode = (payload: IGetOtpCode) => {
  return httpRepository.execute({
    path: '/api/Accounts/LoginOTP',
    method: 'post',
    payload,
    config: { isPrivate: false },
  });
};
export interface ILoginOTP {
  otpCode: string;
  accountId: string;
}

const loginByOTPCode = (payload: ILoginOTP) => {
  return httpRepository.execute({
    path: '/api/accounts/verifyotp',
    method: 'post',
    payload,
    config: { isPrivate: false },
  });
};

const logout = () => {
  return httpRepository.execute({
    path: '/api/Users/logout',
    method: 'get',
    showSuccess: false,
    config: { isPrivate: true },
  });
};
const resetPass = (value, otp) => {
  return httpRepository.execute({
    path: `/api/Users/resetForgotPassword/key=${otp}`,
    method: 'put',
    payload: value,
    showSuccess: false,
    showError: false,
    config: { isPrivate: false },
  });
};

const getProfile = () => {
  return httpRepository.execute({
    path: '/api/Accounts/GetProfile',
    showSuccess: false,
    convert: (res) => {
      return new User(res);
    },
  });
};

const uploadAvatar = (payload) => {
  return httpRepository.execute({
    path: 'api/Users',
    method: 'put',
    payload,
  });
};

const updateProfileUser = (payload) => {
  const response = httpRepository.execute({
    path: 'api/Users/Profile',
    method: 'put',
    payload,
    config: { isPrivate: true, isFormData: true },
  });
  return response;
};

const verifyCode = (code) => {
  return httpRepository.execute({
    path: '/api/Accounts/Auth',
    showSuccess: false,
    params: { code },
    convert: (data) => {
      return data?.accessToken;
    },
  });
};

export default {
  register,
  login,
  logout,
  resetPass,
  forgotPass,
  CheckRecoveryToken,
  updatePassword,
  getProfile,
  uploadAvatar,
  updateProfileUser,
  getOtpCode,
  loginByOTPCode,
  verifyCode,
};
