import axios from "axios";
import { url } from "./customer";

export const CreateMenu = async (input, id) => {
    try {
        const {data} = await axios.post(`${url}/api/menu/createMenu.php?id=${id}`, input)
        return data;
    }
    catch(err){
        return false
    }
}

export const DeleteAll = async (id) => {
    try {
        const {data} = await axios.delete(`${url}/api/menu/deleteAll.php?id=${id}`)
        return data
    }
    catch(err){
        return false
    }
}

export const DeleteMenuById = async (id, menu_id) => {
    try {
        const {data} = await axios.delete(`${url}/api/menu/deleteById.php?id=${id}&menu_id=${menu_id}`)
        return data
    }
    catch(err){
        return false
    }
}

export const GetMenu = async () => {
    try {
        const {data} = await axios.get(`${url}/api/menu/getMenu.php`)
        return data
    }
    catch(err){
        return false
    }
}

export const GetMenuById = async (id) => {
    try{
        const {data} = await axios.get(`${url}/api/menu/getMenuById.php?menu_id=${id}`)
        return data
    }
    catch(err){
        return false
    }
}

export const UpdateMenu = async (input) => {
    try {
        const { data } = await axios.put(`${url}/api/menu/updateMenu.php`, input)
        return data
    }
    catch (err) {
        return false
    }
}