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
    addStory(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/story/add",data,{headers:header})
    }
    getAllStory(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/story/all",qs.stringify(data),{headers:header})
    }
    deleteStory(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/story/delete",qs.stringify(data),{headers:header})
    }
    updateStory(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/story/update",data,{headers:header})
    }
    singleStory(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/story/single",qs.stringify(data),{headers:header})
    }
    getAllReader(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/reader/all",qs.stringify(data),{headers:header})
    }
    getSingleReader(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/reader/single",qs.stringify(data),{headers:header})
    }
    changeStatusReader(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/reader/changeStatus",qs.stringify(data),{headers:header})
    }
    getAllfeedback(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/feedback/all",qs.stringify(data),{headers:header})
    }
    getSinglefeedback(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/feedback/single",qs.stringify(data),{headers:header})
    }
    deletefeedback(data){
        let header={
            Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"/admin/feedback/delete",qs.stringify(data),{headers:header})
    }
    register(data){
        return axios.post(BASE_URL+"/reader/register",qs.stringify(data))
    }
}
export default new ApiServices