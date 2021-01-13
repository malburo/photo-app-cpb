import request from '../helpers/request';

const commentApi = {
  getByPhotoId: (photoId) => {
    return request.get(`/comments/photos/${photoId}`);
  },
  createComment: (payload) => {
    return request.post(`/comments/photos/${payload.photoId}`, { content: payload.content });
  },
};
export default commentApi;
