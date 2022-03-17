import httpRepository from '@core/repository/http';
import SchoolEntity from './entity';
import { PaginationEntity } from '@core/pagination/entity';
import { OptionEntity, TableEntity } from '@core/table';

// API GET (Promise đồng bộ lòng ghép data từ SchoolEntity)
export const getListSchool = (pagination?: PaginationEntity, options?: OptionEntity): Promise<{ data: SchoolEntity[], info: PaginationEntity }> => {
  const params = new TableEntity(pagination, options);
  return httpRepository.execute({
    path: '/api/Schools',
    showSuccess: false,
    showError: false,
    params,
    convert: (res) => {
      return {
        // set lại data và infor khi xử dụng promise
        data: SchoolEntity.createListSchool(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};
//and get detail
export const getDetailSchool = (id) => {
  return httpRepository.execute({
    path: '/api/Schools/' + id,
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return new SchoolEntity(res);
    },
  });
};


//API ADD
export const createSchool = (payload) => {
  return httpRepository.execute({
    path: '/api/Schools',
    method: 'post',
    payload,
  });
};


//API EDIT/UPDATE
export const updateSchool = (id, payload) => {
  return httpRepository.execute({
    path: '/api/Schools' + id,
    method: 'put',
    payload,
  });
};

//API DELETE
export const deleteSchool = (id) => {
  return httpRepository.execute({
    path: '/api/school/' + id,
    method: 'delete',
  });
};