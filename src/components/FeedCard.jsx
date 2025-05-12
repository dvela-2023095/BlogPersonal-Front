import React from "react";

const FeedCard = ({ 
    author,
    tittle,
    category,
    text,
    coments,
    createdAt
 }) => {
    
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold uppercase">
            
          </div>
          <div>
            <p className="font-semibold text-gray-900">{author.name}</p>
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

      {/* Texto */}
      <p className="text-sm text-gray-700 mb-2">{text}</p>

      
      <div className="text-sm text-gray-500">
        {/* Comentarios */}
      </div>
    </div>
  );
};

export default FeedCard;
