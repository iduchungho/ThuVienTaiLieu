import axios from "axios";
import { url } from "./customer";

export const UploadNews = async (input) => {
    try {
        const {data} = await axios.post(`${url}/news/create.php`, input)
        return data
    }
    catch(err){
        return false
    }
}

export const GetNews = async (input) => {
    try {
        const { data } = await axios.post(`${url}/news/getNews.php`)
        return data
    }
    catch (err) {
        return false
    }
}

export const UpdateNews = async (input) => {
    try {
        const { data } = await axios.post(`${url}/news/updateNews.php`, input)
        return data
    }
    catch (err) {
        return false
    }
}

export const DeleteNewsByID = async (id) => {
    try {
        const { data } = await axios.delete(`${url}/news/deleteNewsbyID.php?id=${id}`)
        return data
    }
    catch (err) {
        return false
    }
}