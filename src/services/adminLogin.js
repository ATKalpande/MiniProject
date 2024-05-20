import axios from "axios";
import { ADMIN_TOKEN_STORAGE_KEY } from "../constant/AuthConstant";

export function adminLogin(loginCred){
   
    return axios.post("http://127.0.0.1:9800/admin/login",loginCred)
}

export function storeToken(token){
    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY,token)
}

export function removeToken(){
    localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY)

}

export function getToken(){
   return  localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)
}