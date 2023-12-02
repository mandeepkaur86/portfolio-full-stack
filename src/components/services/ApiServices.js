import axios from "axios";
import * as qs from "qs"
export const BASE_URL="http://localhost:6001"
class ApiServices{
    adminlogin(data){
        return axios.post(BASE_URL+"/admin/login",qs.stringify(data))
    }
    addThemes(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/theme/add",data,{headers:header})
    }
    getAllThemes(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/theme/all",qs.stringify(data),{headers:header})
    }
    deleteData(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/theme/delete",qs.stringify(data),{headers:header})
    }
    updateThemes(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/theme/update",data,{headers:header})
    }
    singleThemes(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/theme/single",qs.stringify(data),{headers:header})
    }
}
export default new ApiServices