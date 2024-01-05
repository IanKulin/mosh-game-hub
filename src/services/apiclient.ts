import axios from "axios";

export default axios.create({
    baseURL: 'http://api.iankulin.com'
    //baseURL: 'http://localhost:3000'
})