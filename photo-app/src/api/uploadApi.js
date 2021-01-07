import request from '../helpers/request';

const uploadApi = {
  upload: (img) => {
    return request.post('upload', img);
  },
};
export default uploadApi;
