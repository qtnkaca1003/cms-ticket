import { PaginationEntity } from '@core/pagination/entity';
import httpRepository from '@core/repository/http';
import UserEntity, { AccountPermissionEntity } from '@modules/user/entity';
import User from '@modules/user/entity';


const addUser = (payload) => {
  return httpRepository.execute({
    path: '/api/Accounts',
    method: 'post',
    payload,
    config: { isPrivate: true },
  });
};
const updateUser = (payload, id) => {
  return httpRepository.execute({
    path: `/api/Accounts/${id}`,
    method: 'put',
    payload,
    config: { isPrivate: true },
  });
};

const deleteUser = (payload) => {
  return httpRepository.execute({
    path: '/api/Accounts/DeleteMany',
    method: 'post',
    payload,
    config: { isPrivate: true },
  });
};

const getUser = (params) => {
  return httpRepository.execute({
    path: '/api/Accounts',
    params,
    showError: false,
    showSuccess: false,
  }).then((dataListGroup: any) => {
    return Promise.resolve({
      data: User.createArrayUser(dataListGroup.pagedData),
      info: new PaginationEntity(dataListGroup.pageInfo),
    });
  });
};

const getDetailUser = (params) => {
  return httpRepository.execute({
    path: `/api/Accounts/${params}`,
    showError: false,
    showSuccess: false,
    convert: (res) => new UserEntity(res),
  });
};

const getPermission = () => {
  return httpRepository.execute({
    path: '/api/Permissions',
    showSuccess: false,
    convert: (res) => AccountPermissionEntity.createlistPermisison(res),
  });
};

export default {
  getDetailUser,
  addUser,
  updateUser,
  deleteUser,
  getPermission,
  getUser,

};
