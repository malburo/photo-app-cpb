import request from '../helpers/request';

const photoApi = {
  getAll: () => {
    return request.get('photos');
  },
  create: (payload) => {
    return request.post('photos', payload);
  }
};
export default photoApi;
