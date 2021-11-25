import { BASE_URL } from "..";
import * as METHODS from "../methods"

const URL = `${BASE_URL}/user`;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlcGl0b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6InBlcGl0bzEyMzQ1NiIsImlhdCI6MTYzMTExMzE1OX0.zrpVB7vfQdCQomGCL4zCVd2Ihbo9epD6kXahETLysMM"

export const list = async () => {
    try{
        const response = await fetch(`${URL}/users`, METHODS.GET(token));
        const data = await response.json();
        return data;
    }catch(e){
        return e.message;
    }
}