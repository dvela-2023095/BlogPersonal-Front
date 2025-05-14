import React, { useState,useContext, useEffect} from "react";
import { useComent } from "../shared/hooks/useComent";
import { FilterAndChangeContext } from "./ContextProvider";
export const AddComentForm = ({id,}) => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const[usernameError,setUsernameError]=useState('')
  const[commentError,setCommentError]=useState('')
  const[disabled,setDisabled]= useState(true)
  const {addComment,error}=useComent()
  const {change,setChange}=useContext(FilterAndChangeContext)
  const handleSubmit =(e)=>{
    e.preventDefault()
    const newComment ={
      author:username,
      comment:text
    }
    addComment(newComment,id)
    if(error ===false){
      setUsername('')
      setText('')
      setChange(!change)
    }
  }
  const handleOnBlur=(e)=>{
    switch (e.target.id) {
      case 'username':
          const username = e.target.value
          if(username.length <5 || username.length>30){
            setUsernameError('El nombre de usuario  debe tener de 5 a 30 caracteres')
          }else{
            setUsernameError('')
          }
          break
      case 'comment':
          const comment = e.target.value
          if(comment.length <30 || comment.length>500){
            setCommentError('El comentario  debe tener de 30 a 500 caracteres')
          }else{
            setCommentError('')
          }
        
    }
  }

  useEffect(()=>{
    if(usernameError ==='' && commentError ==='' && username.length!=0 && text.length!=0){
      console.log('hola');
      
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  },[username,text])

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mt-4 space-y-2">
      <input
        type="text"
        placeholder="Tu nombre"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={handleOnBlur}
        className="w-full border px-3 py-2 rounded text-sm"
      />
      <span className="  rounded shadow mt-4 space-y-2 text-red-500">{usernameError}</span>
      <textarea
        placeholder="Escribe tu comentario..."
        id="comment"
        value={text}
        onBlur={handleOnBlur}
        onChange={(e) => setText(e.target.value)}
        className="w-full border px-3 py-2 rounded text-sm"
        rows={3}
      />
      <span className=" p-4 w-full rounded shadow mt-4 space-y-2 text-red-500">{commentError}</span>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 text-right"
        type="submit"
        disabled={disabled}
      >
        Comentar
      </button>
    </form>
  );
};