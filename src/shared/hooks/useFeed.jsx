import React,{useState,useEffect} from "react";
import { loadFeedRequest } from "../../services/api";
import toast from "react-hot-toast";
export const useFeed=()=>{
    const [feed,setFeed]=useState([])
    const getFeed = async()=>{
        const feedData = await loadFeedRequest()
        if(feedData.error){
            return toast.error(
                feedData?.err?.response?.data ||
                'Error al obtener el Feed'
        )

        }
        
        setFeed(feedData.data.feed)
        
        
    }

    return{
        getFeed,
        isFetching:!feed,
        allFeed:feed
    }
}