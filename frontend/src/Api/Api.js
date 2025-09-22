import axios from 'axios';

const API_URL_LIVE =  "https://backend-ecom-n1t3.onrender.com/api"
const API_URL =  "http://localhost:5001/api"

function getToken() {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem('token');
        return data;
    }
    return null;
}
console.log("window.location.host",window.location.host)

let Api = axios.create({
    baseURL: window.location.host == 'localhost:3000' ?  API_URL  : API_URL_LIVE,
    //baseURL: "http://localhost:5001/api",
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
});

Api.interceptors.request.use(
    async (config) => {
        const token = getToken();
        if (token !== null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { Api };
