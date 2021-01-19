import request from '../helpers/request';

const userApi = {
  getUser: ({ userId }) => {
    return request.get(`users/${userId}`);
  },
  updateUserInfo: (payload) => {
    return request.put(`users/${payload.userId}`, payload);
  },
  updatePassword: (payload) => {
    return request.put(`users/${payload.userId}/change-password`, payload);
  },
  updateAvatar: (payload) => {
    return request.put(`users/${payload.userId}/change-avatar`, payload);
  },
  deleteMe: (payload) => {
    return request.post(`users/${payload.userId}`, payload);
  },
  getPhotosOfUser: ({ userId }) => {
    console.log(userId);
    return request.get(`users/${userId}/photos`);
  },
};
export default userApi;
