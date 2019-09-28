import axios from "axios";

 const axiosWithAuth = ()=>{
    const token = localStorage.getItem('token')
    console.log(token)
     return axios.create({
         baseURL:'https://party-pal.herokuapp.com/api',
         headers:{
             Authorization:token
         }
     })
 }


 export default axiosWithAuth;