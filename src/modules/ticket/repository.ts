import httpRepository from '@core/repository/http';

export const getListTicket = () => {
  return httpRepository.execute({
    path: '/data.json',
    showSuccess: false,
    showError: false,
    convert: (res) => {
      return (res);
    },
  });
};
//export default getListTicket