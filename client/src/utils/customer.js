import axios from "axios";

export const url = "http://localhost/bkfood-court/server/src/api"

export const Register = async (input) => {
    try {
        const {
            customer_id,
            first_name,
            last_name,
            email_id,
            password,
            phone_no,
            role,
            avatar,
            city
        } = input;
        const {data} = await axios.post(`${url}/api/customer/create.php`,{
            "customer_id" : customer_id,
            "first_name" : first_name,
            "last_name" : last_name,
            "email_id" : email_id,
            "password" : password,
            "phone_no" : phone_no,
            "role" : role,
            "avatar" : avatar,
            "city" : city
        })
        return data;
    }
    catch(err){
        return false
    }
}

export const UpdateCustomer = async (input) => {
    try {
        const {
            customer_id,
            first_name,
            last_name,
            email_id,
            password,
            phone_no,
            role,
            avatar,
            city
        } = input;
        const { data } = await axios.put(`${url}/api/customer/update.php`, {
            "customer_id": customer_id,
            "first_name": first_name,
            "last_name": last_name,
            "email_id": email_id,
            "password": password,
            "phone_no": phone_no,
            "role": role,
            "avatar": avatar,
            "city": city
        })
        return data;
    }
    catch (err) {
        return false
    }
}

export const DeleteCustomers = async (id) => {
    try {
        const {data} = await axios.delete(`${url}/api/customer/delete.php?id=${id}`)
        return data
    }
    catch (err) {
        return false
    }
}

export const UpdateCustomerAvt = async (id, file) => {
    try {
        const { data } = await axios.post(`${url}/api/customer/update_img.php?id=${id}`, file)
        return data
    }
    catch (err) {
        return false
    }
}

export const GetAllCustomers = async (id) => {
    try{
        const { data } = await axios.get(`${url}/api/customer/get.php?id=${id}`)
        return data    
    }
    catch(err){
        return false
    }
}

export const Logout = async (id) => {
    try {
        const {data} = await axios.get(`${url}/api/customer/logout.php?id=${id}`)
        return data
    }
    catch (err) {
        return false
    }
}

export const GetCustomerByID = async (id) => {
    try {
        const { data } = await axios.get(`${url}/api/customer/get_by_id.php?id=${id}`)
        return data
    }
    catch (err) {
        return false
    }
}

export const Login = async (input) => {
    try {
        const { data } = await axios.get(`${url}/api/customer/get_by_id.php?id=${id}`, input)
        return data
    }
    catch (err) {
        return false
    }
}