import React, { useEffect, useState } from "react";
import {DashBoardPage} from '../DashBoardPage'
import { useNavigate } from "react-router-dom";
export const AuthPage =()=>{
    const [isLogin,setIsLogin]=useState(true)
    const navigate = useNavigate()
    const handleAuthPage=()=>{
        setIsLogin((prev)=>!prev)
    }
    useEffect(()=>{
        navigate('/dashboard/feed')
    },[])
    return(
        <>
            
        </>
    )
}