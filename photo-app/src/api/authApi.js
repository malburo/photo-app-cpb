import request from '../helpers/request';

const authApi = {
  getMe: () => {
    return request.get('auth/my-profile');
  },
  login: (payload) => {
    return request.post('auth/login', payload);
  },
  register: (payload) => {
    return request.post('auth/register', payload);
  },
};
export default authApi;
