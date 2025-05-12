import axios from "axios";

const apiClient = axios.create(
    {
        baseURL:'http://localhost:2656/v1',
        timeout: 2000
    }
)

//Ruta Registro

//Ruta Login
export const loginRequest=async(user)=>{
    try {
        return await apiClient.post('/login',user,{type:'multipart/form-data'})
        
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const loadFeedRequest =async()=>{
    try {
        return await apiClient.get('/user/feed')
    } catch (e) {
        return{error:true,
        e
        }
    }
}
apiClient.interceptors.request.use(
    (config)=>{
        const userDetails = localStorage.getItem('user')
        if(userDetails){
            const token = JSON.parse(userDetails)
            config.headers.Authorization = `${token}`
        }
        return config
    }
)