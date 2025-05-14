import React from "react";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate()
  const handleNavigate =(page)=>{
    navigate(`/dashboard/${page}`)
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">MiApp</h1>
      <nav className="space-y-4">
        <button onClick={()=>handleNavigate('feed')} className="block text-left text-gray-800 hover:text-blue-500">Feed</button>
      </nav>
    </div>
  );
};
