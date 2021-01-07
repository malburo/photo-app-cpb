import request from '../helpers/request';

const authApi = {
  login: (payload) => {
    return request.post('auth/login', payload);
  },
  register: (payload) => {
    return request.post('auth/register', payload);
  },
};
export default authApi;
