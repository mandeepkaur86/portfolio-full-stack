import axios from "axios";
import * as qs from "qs"
const BASE_URL="http://localhost:6001/"
class ApiServices{
    login(data){
        return axios.post(BASE_URL+"/api/user/login",qs.stringify(data))
    }
}
export default new ApiServices