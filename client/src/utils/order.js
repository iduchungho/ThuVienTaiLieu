import axios from "axios";
import { url } from "./customer";

export const CreateOrder = async (id, input) => {
    try {
        const {data} = await axios.post(`${url}/api/order/create.php?id=${id}`, input)
        return data
    }
    catch (err) {
        return false;
    }
}

export const DeleteAllOrder = async (id) => {
    try {
        const { data } = await axios.delete(`${url}/api/order/deleteAll.php?id=${id}`)
        return data
    }
    catch (err) {
        return false;
    }
}

export const DeleteOrderById = async (id, order_id) => {
    try {
        const { data } = await axios.delete(`${url}/api/order/deleteByid.php?id=${id}&order_id=${order_id}`)
        return data
    }
    catch (err) {
        return false;
    }
}

export const GetAllOrder = async (id) => {
    try {
        const { data } = await axios.get(`${url}/api/order/getALL.php?id=${id}`)
        return data
    }
    catch (err) {
        return false;
    }
}

export const GetOrderByID = async (id, order_id) => {
    try {
        const { data } = await axios.get(`${url}/api/order/getALL.php?id=${id}&order_id=${order_id}`);
        return data
    }
    catch (err) {
        return false;
    }
}

export const UpdateOrder = async (id) => {
    try {
        const { data } = await axios.get(`${url}/api/order/update.php?id=${id}`)
        return data
    }
    catch (err){
        return false
    }
}