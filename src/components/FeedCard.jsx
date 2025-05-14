import React from "react";
import { useNavigate } from "react-router-dom";

export const FeedCard = ({ 
    author,
    tittle,
    category,
    text,
    coments,
    createdAt,
    id
 }) => {
  const navigate = useNavigate()
  const handleViewDetails=()=>{
    navigate('/dashboard/details',{
      state:{
        tittle,
        category,
        text,
        comments:coments,
        createdAt,
        id:id
      }
    })
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold uppercase">
            
          </div>
          <div>
            <p className="text-xs text-gray-500">
              { /* Fecha de publicacion */ }
            </p>
          </div>
        </div>
      </div>

      {/* Título */}
      <h3 className="text-lg font-bold text-gray-800 mb-1">{tittle}</h3>

      {/* Categoría */}
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">
        {category.name}
      </span>

      

      
      <div className="text-sm text-gray-500 text-right hover:text-gray-900" onClick={handleViewDetails}>
        Ver Detalles
      </div>
    </div>
  );
};

