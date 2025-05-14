import React,{useState} from "react";
import { addCommentRequest, getCommentsRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useComent=()=>{
    const [comments,setComments]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(false)
    const addComment = async(comment,id)=>{
        setIsLoading(true)
        const response = await addCommentRequest(comment,id)
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
                'Error general al intentar Agregar el Comentario.'
            )
        }
        setError(false)
        return toast.success('TODO GOOD')
    }
    const getComments =async(id)=>{
        const commentsData = await getCommentsRequest(id)
        if(commentsData.error){
            return toast.error(
                commentsData?.err?.response?.data ||
                'Error al obtener el Feed'
        )

        }
        setComments(commentsData.data.comments)
    }
    return{
        addComment,
        isLoading,
        error,
        setError,
        getComments,
        comments
    }
}