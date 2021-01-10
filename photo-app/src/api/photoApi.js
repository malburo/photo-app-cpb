import request from '../helpers/request';

const photoApi = {
  getAll: () => {
    return request.get('photos');
  },
  getAllOfMe: () => {
    return request.get(`photos/users/me`);
  },
  search: (payload) => {
    return request.get(`photos/search?fullname=${payload.search}`);
  },
  getById: (photoId) => {
    return request.get(`photos/${photoId}`);
  },
  create: (payload) => {
    return request.post('photos', payload);
  },
  update: (payload) => {
    return request.put(`photos/${payload.photoId}`, payload);
  },
  delete: (photoId) => {
    return request.delete(`photos/${photoId}`);
  },
};
export default photoApi;
