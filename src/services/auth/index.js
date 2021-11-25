//paso 1 debemos importar la ruta base y los metodos
import { BASE_URL } from "..";
import * as METHODS from "../methods"
//paso 2 necesito los servicios que son login y signup
const URL = `${BASE_URL}/auth`;

export const login = async (body) => {
    try{
        const response = await fetch(`${URL}/login`, METHODS.POST(body));
        const data = await response.json();
        return data;
    }catch(e){
        return e.message;
    }
}