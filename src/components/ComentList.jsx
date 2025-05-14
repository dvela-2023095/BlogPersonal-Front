// components/CommentList.jsx
import React, { useContext, useEffect, useState } from "react";
import { useComent } from "../shared/hooks/useComent";
import { FilterAndChangeContext } from "./ContextProvider";
export const ComentList = ({ id }) => {
  const {getComments,comments}=useComent()
  const {change}=useContext(FilterAndChangeContext)
  useEffect(()=>{
    getComments(id)
  },[])
  useEffect(()=>{
    getComments(id)
    
  },[change])
  
  return (
    <div className="mt-4 space-y-4">
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-100 p-3 rounded shadow-sm text-sm relative">
          <p className="font-semibold text-blue-800">{comment.author}</p>
          <p className="text-gray-800 mt-1">{comment.comment}</p>
          <p className="text-xs text-gray-500 text-right mt-2">
            {new Date(comment.createdAt).toLocaleDateString("es-ES")}
          </p>
        </div>
      ))}
    </div>
  );
};
