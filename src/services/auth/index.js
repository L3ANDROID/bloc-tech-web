//paso 1 debemos importar la ruta base y los metodos
import { BASE_URL } from "..";
import * as METHODS from "../methods"
//paso 2 necesito los servicios que son login y signup
const URL = `${BASE_URL}/auth`;

export const login = async (body) => {
    try{
        const response = await fetch(`${URL}/login`, METHODS.POST(body));
        const data = await response.json();
        if(data.data.token){
            sessionStorage.setItem("token",data.data.token)
        }else{ return false }
        return data;
    }catch(e){
        console.log(e);
    }
}

export const signin = async (body) => {
    try{
        const response = await fetch(`${URL}/signup`, METHODS.POST(body));
        const data = await response.json();
        // sessionStorage.setItem("token", data.data.token)
        return data;
    }catch(e){
        return false;
    }
}