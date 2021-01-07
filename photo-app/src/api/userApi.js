import request from '../helpers/request';

const userApi = {
  getMe: () => {
    return request.get('users/me');
  },
  updateMe: (payload) => {
    return request.post('users/me', payload);
  },
  updatePassword: (payload) => {
    return request.post('users/me/password', payload);
  },
  updateAvatar: (payload) => {
    return request.post('users/me/avatar', payload);
  },
  deleteMe: (payload) => {
    return request.post('users/me', payload);
  },
};
export default userApi;
