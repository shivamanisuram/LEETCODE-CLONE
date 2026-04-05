import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://leetcode-clone-production.up.railway.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

