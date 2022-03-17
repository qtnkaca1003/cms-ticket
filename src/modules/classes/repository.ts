import httpRepository from '@core/repository/http';
import ClassEntity from './entity';
import { PaginationEntity } from '@core/pagination/entity';
import { OptionEntity, TableEntity } from '@core/table';

// API GET, 
export const getListClass = (pagination: PaginationEntity, options: OptionEntity) => {
  const params = new TableEntity(pagination, options);
  return httpRepository.execute({
    path: '/api/Classes',
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        data: ClassEntity.createListClass(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};
//and get detail
export const getDetailClass = (id) => {
  return httpRepository.execute({
    path: '/api/Classes/' + id,
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return new ClassEntity(res);
    },
  });
};


//API ADD
export const createClass = (payload) => {
  return httpRepository.execute({
    path: '/api/Classes',
    method: 'post',
    payload,
  });
};


//API EDIT/UPDATE
export const updateClass = (id, payload) => {
  return httpRepository.execute({
    path: '/api/Classes/' + id,
    method: 'put',
    payload,
  });
};

//API DELETE
export const deleteClass = (payload) => {
  return httpRepository.execute({
    path: '/api/Classes',
    method: 'delete',
    payload,
  });
};