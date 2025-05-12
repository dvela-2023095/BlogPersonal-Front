import { useState } from "react"
import { loginRequest } from "../../services/api"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useLogin = ()=>{
    const [isLoading, setIsLoading]=useState(false)
    const[error,setError]=useState(false)
    const navigate = useNavigate()
    const login = async(username,password)=>{
        setIsLoading(true)
        const user={
            username,
            password
        }
        const response = await loginRequest(user)
        setIsLoading(false)
        if(response.error){
            setError(true)
            if(response?.err?.response?.data?.errors){
                let arrayErrors = response?.err?.response?.data?.errors
                for (const error of arrayErrors) {
                    return console.log(error.msg)
                }
            }
            console.log(response.e);
            
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al intentar Loguear el usuario. Intente de nuevo, todo mal...'
            )
        }
        setError(false)
        const { token } = response.data
        localStorage.setItem('user', JSON.stringify(token))
        navigate('/dashboard')
        return toast.success('TODO GOOD')
    }
    return{
        login,
        isLoading,
        error,
        setError
    }
}