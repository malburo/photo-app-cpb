import request from '../helpers/request';

const userApi = {
  getMe: () => {
    return request.get('users/me');
  },
  updateMe: (payload) => {
    return request.post('users/me', payload);
  },
  deleteMe: (payload) => {
    return request.post('users/me', payload);
  },
};
export default userApi;
