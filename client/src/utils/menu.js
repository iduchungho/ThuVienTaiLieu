import axios from "axios";
import { url } from "./customer";

export const CreateMenu = async (input) => {
    try {
        const {data} = await axios.post(`${url}/menu/createMenu.php`, input)
        return data;
    }
    catch(err){
        return err
    }
}

export const DeleteAll = async (id) => {
    try {
        const {data} = await axios.delete(`${url}/menu/deleteAll.php?id=${id}`)
        return data
    }
    catch(err){
        return false
    }
}

export const DeleteMenuById = async (menu_id) => {
    try {
        const {data} = await axios.delete(`${url}/menu/deleteMenubyID.php?menu_id=${menu_id}`)
        return data
    }
    catch(err){
        return false
    }
}

export const GetMenu = async () => {
    try {
        const {data} = await axios.get(`${url}/menu/getMenu.php`)
        return data
    }
    catch(err){
        return false
    }
}

export const GetMenuById = async (id) => {
    try{
        const {data} = await axios.get(`${url}/menu/getMenuById.php?menu_id=${id}`)
        return data
    }
    catch(err){
        return false
    }
}

export const UpdateMenu = async (input) => {
    try {
        const { data } = await axios.post(`${url}/menu/updateMenu.php`, input)
        return data
    }
    catch (err) {
        return false
    }
}

export const UpdateImgMenu = async (id,input) => {
    try {
        const { data } = await axios.post(`${url}/menu/update_img.php?menu_id=${id}`, input)
        return data
    }
    catch (err) {
        return false
    }
}