import axiosClient from './axiosClient';

const menuApi = {
  getAll(params) {
    const url = '/menu';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/menu/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/menu';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/menu/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/menu/${id}`;
    return axiosClient.delete(url);
  },
};

export default menuApi;
