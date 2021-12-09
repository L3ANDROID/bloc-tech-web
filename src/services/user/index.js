import { BASE_URL } from "..";
import * as METHODS from "../methods"

const URL = `${BASE_URL}/user`;


export const list = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const response = await fetch(`${URL}/users`, METHODS.GET(token));
            const data = await response.json();
            return data;
        } else {
            return false
        }
}

export const edit = async (body,id) => {
    if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token")
        const response = await fetch(`${URL}/update/${id}`, METHODS.PUT(body,token));
        const data = await response.json();
        return data;
    } else {
        return false
    }
}

export const remove = async (id) => {
    if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token")
        const response = await fetch(`${URL}/delete/${id}`, METHODS.DELETE(token));
        const data = await response.json();
        return data;
    } else {
        return false
    }
}