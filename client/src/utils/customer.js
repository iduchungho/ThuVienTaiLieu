import axios from 'axios';

export const url = 'http://localhost:80/bkfood-court/server/src/api';

export const Register = async (input) => {
  try {
    const { data } = await axios.post(`${url}/customer/create.php`, input);
    return data;
  } catch (err) {
    return false;
  }
};

export const UpdateCustomer = async (input) => {
  try {
    const { data } = await axios.put(`${url}/customer/update.php`, input);
    return data;
  } catch (err) {
    return false;
  }
};

export const DeleteCustomers = async (id) => {
  try {
    const { data } = await axios.delete(`${url}/customer/delete.php?id=${id}`);
    return data;
  } catch (err) {
    return false;
  }
};

export const UpdateCustomerAvt = async (id, file) => {
  try {
    const { data } = await axios.post(`${url}/customer/update_img.php?id=${id}`, file);
    return data;
  } catch (err) {
    return false;
  }
};

export const GetAllCustomers = async (id) => {
  try {
    const { data } = await axios.get(`${url}/customer/get.php?id=${id}`);
    return data;
  } catch (err) {
    return false;
  }
};

export const Logout = async (id) => {
  try {
    const { data } = await axios.get(`${url}/customer/logout.php?id=${id}`);
    return data;
  } catch (err) {
    return false;
  }
};

export const GetCustomerByID = async (id) => {
  try {
    const { data } = await axios.get(`${url}/customer/get_by_id.php?id=${id}`);
    return data;
  } catch (err) {
    return false;
  }
};

export const Signin = async (input) => {
  try {
    const { data } = await axios.post(`${url}/customer/login.php`, input);
    return data;
  } catch (err) {
    return err;
  }
};

export const UpdatePass = async (input) => {
  try {
    const { data } = await axios.post(`${url}/customer/update_pass.php`, input);
    return data;
  } catch (err) {
    return err;
  }
};
