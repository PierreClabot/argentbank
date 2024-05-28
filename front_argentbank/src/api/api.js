import axios from 'axios'

class Api{
    constructor(){

    }
    static async login({email,password}){
        try {
            const res = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });
            return res.data.body.token;
        } catch (err) {
            throw new Error(err.response.data);
        }
    }

    static async editProfile({token,firstName,lastName}){

        const headers = {
            "Authorization": "Bearer "+token,
            "Content-Type" : "application/json"
        }

        const body = {
            "firstName" : firstName,
            "lastName" : lastName
        }       

        try {
            const res = await axios.put("http://localhost:3001/api/v1/user/profile", body,{headers});
            return res.data.body;
        } catch (err) {
            throw new Error(err.response.data);
        }
    }

    static async getUser(token){

        const headers = {
            "Authorization": "Bearer "+token,
            "Content-Type" : "application/json"
        }
        try {
            const res = await axios.post("http://localhost:3001/api/v1/user/profile", {},{headers});
            return res.data.body;
        } catch (err) {
            throw new Error(err.response.data);
        }
    }
}

export default Api