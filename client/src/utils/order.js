import axios from "axios";
import { url } from "./customer";

export const CreateOrder = async (id, input) => {
    try {
        const {data} = await axios.post(`${url}/order/create.php?id=${id}`, input)
        return data
    }
    catch (err) {
        return false;
    }
}

export const DeleteAllOrder = async (id) => {
    try {
        const { data } = await axios.delete(`${url}/order/deleteAll.php?id=${id}`)
        return data
    }
    catch (err) {
        return false;
    }
}

export const DeleteOrderById = async (id, order_id) => {
    try {
        const { data } = await axios.delete(`${url}/order/deleteByid.php?id=${id}&order_id=${order_id}`)
        return data
    }
    catch (err) {
        return false;
    }
}

export const GetAllOrder = async (id) => {
    try {
        const { data } = await axios.get(`${url}/order/getALL.php?id=${id}`)
        return data
    }
    catch (err) {
        return false;
    }
}

export const GetOrderByID = async (id, order_id) => {
    try {
        const { data } = await axios.get(`${url}/order/getALL.php?id=${id}&order_id=${order_id}`);
        return data
    }
    catch (err) {
        return false;
    }
}

export const UpdateOrder = async (id) => {
    try {
        const { data } = await axios.get(`${url}/order/update.php?id=${id}`)
        return data
    }
    catch (err){
        return false
    }
}