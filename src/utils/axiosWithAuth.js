import axios from "axios";

export const axiosWithAuth = ()=>{
    const token = localStorage.getItem('token')
     return axios.create({
         baseURL:'https://party-pal.herokuapp.com/api/auth',
         headers:{
             Autorization:token
         }
     })
 }