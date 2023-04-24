import axios from "axios";
import { url } from "./customer";

export const create_payment = async (id, input) => {
    try{
        const {data} = await axios.post(`${url}/payment/create_payment.php?id=${id}`, input)
        return data
    }
    catch (err){
        return false
    }
}

export const deleteAll_payment = async (id) => {
    try {
        const {data} = await axios.delete(`${url}/payment/deleteALLpayment.php?id=${id}`)
        return data
    }
    catch(err) {
        return false
    }
}

export const GetAll_payment = async (id) => {
    try{
        const {data} = await axios.get(`${url}/payment/getAllpayment.php?id=${id}`)
        return data
    }
    catch(err) {
        return false
    }
}

export const UpdatePaymentByID = async (id, input) => {
    try {
        const { data } = await axios.post(`${url}/payment/updatePaymentbyId.php?id=${id}`, input)
        return data
    }
    catch (err) {
        return false
    }
}