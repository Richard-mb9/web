import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import TokenManager from '../commons/TokenManager';

const baseUrlAuthAPI = 'http://localhost:8080/auth'
const baseUrlFoobleAPI = 'http://localhost:8081/fooble'


function createAPI(api: AxiosInstance){
    api.interceptors.request.use((config: InternalAxiosRequestConfig)=>{
        const newConfig = {...config}
        newConfig.headers.Authorization = `Bearer ${TokenManager.getAccessToken()}`;
        return newConfig
    })

    return api;
}


const authApi = axios.create({
    baseURL: baseUrlAuthAPI,
    headers:{'authorization': `Bearer ${TokenManager.getAccessToken()}`}
})

const foobleApi = axios.create({
    baseURL: baseUrlFoobleAPI,
    headers:{'authorization': `Bearer ${TokenManager.getAccessToken()}`}
})

export const authAPI = createAPI(authApi);

export const foobleAPI = createAPI(foobleApi);

