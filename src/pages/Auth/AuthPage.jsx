import React, { useState } from "react";
import { Login } from "../../components/Login/Login";
import { Register } from "../../components/Register.jsx/Register";
export const AuthPage =()=>{
    const [isLogin,setIsLogin]=useState(true)
    const handleAuthPage=()=>{
        setIsLogin((prev)=>!prev)
    }
    return(
        <>
            {
                isLogin ? (
                    <Login switchAuthHandler={handleAuthPage}/>
                ):(
                    <Register/>
                )
            }
        </>
    )
}